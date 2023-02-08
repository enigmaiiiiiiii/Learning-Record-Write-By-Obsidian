const fs = require('fs');
const path = require('path');

function modifyLinks(dir) {
  console.log(`modifyLinks`)
  fs.readdir(dir, (err, files) => {
    if (err) {
      throw err;
    }

    for (const file of files) {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stat) => {
        if (err) {
          throw err;
        }

        if (stat.isDirectory()) {
          modifyLinks(filePath);
        } else if (file.endsWith(".md")) {
          fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) {
              throw err;
            }
            let match;
            let newData = data;
            const linkRegex = /\[(.*?)\]\((.*?)\)/g;

            while (match = linkRegex.exec(data)) {
              const p1 = match[1];
              const p2 = match[2].replace(/_/g, '-').toLowerCase();
              newData = newData.replace(match[0], `[${p1}](${p2})`);
              console.log(`replace ${match[0]} to [${p1}](${p2})`);
            }

            fs.writeFile(filePath, newData, "utf-8", (err) => {
              if (err) {
                throw err;
              }
            });
          });
        }
      });
    }
  })
}

const notePath = path.dirname(process.cwd());

modifyLinks(notePath);
