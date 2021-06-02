// importing sitemap & next utils
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import type { NextApiRequest, NextApiResponse } from 'next';
import { portfolioAPI } from '../../utils';
import { ProjectType, SitemapObject } from '../../interfaces';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // An array with your links
    const links: SitemapObject[] = [];

    const projects = await portfolioAPI.get('/projects');

    projects.data.map((_project: ProjectType) => {
      links.push({
        url: `/${_project.projectID}`,
        changefreq: 'daily',
        priority: 0.9,
      });
    });

    // Create a stream to write to
    const stream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    res.writeHead(200, {
      'Content-Type': 'application/xml',
    });

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then(data => data.toString());

    res.end(xmlString);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
