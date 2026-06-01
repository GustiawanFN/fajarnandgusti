# Fajar Nanda Gustiawan — Portfolio

A single-file, Windows 95 themed portfolio. No build step — plain HTML/CSS/JS.

## Structure

```
portfolio/
├── index.html          # the whole site (HTML + CSS + JS in one file)
├── netlify.toml        # tells Netlify: no build, publish this folder
├── assets/
│   ├── cv/               
│   ├── music/           # mp3 files for the music player (later)
│   └── img/             # images (later)
└── README.md
```

## Adding the CV
Drop your PDF into `assets/cv/` named exactly `your_file.pdf`.
The "Download CV" button (About window), the Resume.pdf desktop icon, and the
terminal `resume` command will all serve it.

## Run locally
Just open `index.html` in a browser. (For the music player's audio, a normal
double-click works fine.)

## Deploy (Netlify via Git)
```
git add .
git commit -m "your message"
git push
```
Netlify auto-deploys on push. Build command is empty; publish directory is the
repo root (see netlify.toml).
