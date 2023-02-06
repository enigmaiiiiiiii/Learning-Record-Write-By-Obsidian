import fs from "fs";
import path from "path";

const notePath = "D:/MyGitHubRepo/playground/nodejs/sample/targetnote";

function renameFiles(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) throw err;
    for (const file of files) {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (error, stats) => {
        if (error) throw error;
        if (stats.isDirectory()) {
          renameFiles(filePath);
        } else if (path.extname(file) === ".md") {
          const newName = file.replace(/_/g, '-').toLowerCase();
          const newPath = path.join(dir, newName);
          fs.rename(filePath, newPath, (error) => {
            if (error) {
              throw error;
            } else {
              console.log(`rename ${filePath} to ${newPath} successfully`)
            }
          });
        }
      });
    }
  });
}

renameFiles(notePath);
