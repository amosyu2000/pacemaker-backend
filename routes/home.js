import express from 'express';
import fs from 'fs';
import marked from 'marked';
import path from 'path';

export const router = express.Router();

// Renders the README as html for the home page
router.get('/', (req, res) => {
  res.render(
    'index',
    {contents : marked(fs.readFileSync(path.resolve('./README.md'), 'utf8'))}
  );
});