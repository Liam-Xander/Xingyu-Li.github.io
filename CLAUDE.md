# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is an academic personal homepage built with Jekyll using the minimal-light theme. It's designed for GitHub Pages deployment and showcases publications, research interests, and academic services.

## Architecture

- **Jekyll Theme**: Uses `yaoyao-liu/minimal-light` as a remote theme
- **Con/
- `html_source_file/` - Compiled HTML version (alternative to Jekyll)

## Development Commands

### Local Development with Jekyll
```bash
# Install dependencies
bundle install
bundle add webrick

# Start local server
bundle exec jekyll server
```
Access at `http://localhost:4000`

### Using Ruby/Jekyll
Requires Ruby and Jekyll installed. Generated files appear in `_site/` folder.

## Content Management

### Publications
- Edit `_data/publications.yml` to add/modify publications
- Each publication supports: title, authors, conference, PDF, code, video, bibtex, notes
- Images should be placed in `assets/img/`

### Personal Information
- Update `_config.yml` for basic info (name, position, email, links)
- Modify `index.md` for About Me, Research Interests, and News sections

### Styling
- Edit `_sass/minimal-light.scss` for custom styles
- Dark mode styles in `_sass/minimal-light-no-dark-mode.scss`
- Font choice configurable in `_config.yml` (Serif/Sans Serif)

## Deployment

- **GitHub Pages**: Automatically builds and deploys via remote theme
- **Manual HTML**: Use files in `html_source_file/` directory for direct hosting
- Custom domain configured via `CNAME` file

## Theme Features

- Responsive design with mobile support
- Automatic dark mode switching
- SEO optimization
- Publication list with images and links
- Academic services section
- Social media and academic profile links