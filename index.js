const fs = require("fs");
const { Storage } = require("@google-cloud/storage");
const storage = new Storage();
const myBucket = storage.bucket("jk-sandbox"); // TODO: Create your own bucket

const file = myBucket.file("testfile");

fs.createReadStream("./testfile.txt")
  .pipe(
    file.createWriteStream({
      gzip: true,
      metadata: {
        contentType: "text/plain",
        contentEncoding: "gzip",
      },
    })
  )
  .on("error", function (err) {
    console.error(err);
  })
  .on("finish", function () {
    // Phew!
  });
