import { randomUUID } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';

import { FastifyInstance } from 'fastify';
import { fastifyMultipart } from '@fastify/multipart';

import { prisma } from '../lib/prisma';

const pump = promisify(pipeline);

export async function uploadVideoRoute(app: FastifyInstance) {
  app.register(fastifyMultipart, {
    limits: {
      fileSize: 1024 * 1024 * 25, // 25mb
    },
  });

  app.post('/videos', async (req, reply) => {
    const data = await req.file();

    if (!data) {
      return reply.status(400).send({ error: 'Missing file input.' });
    }

    const extension = path.extname(data.filename);

    if (extension !== '.mp3') {
      return reply.status(400).send({ error: 'Invalid input type (expected .mp3)' });
    }

    const fileBaseName = path.basename(data.filename, extension);
    const fileUploadName = `${fileBaseName}-${randomUUID()}${extension}`;

    const uploadPath = path.resolve(__dirname, '../../tmp', fileUploadName);

    await pump(data.file, fs.createWriteStream(uploadPath));

    const video = await prisma.video.create({
      data: {
        name: data.filename,
        path: uploadPath,
      },
    });

    return {
      video,
    };
  });
}
