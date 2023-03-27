const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { v4: uuidv4 } = require("uuid");

const s3 = new S3Client({region: 'eu-north-1'});

const BUCKET = process.env.BUCKET_NAME;

const uploadToS3 = async ( file, userId ) => {
  const key = `${userId}/ ${uuidv4()}`;
  //console.log(file, key)
  const command = new PutObjectCommand({
    Bucket: "react-node-s3-file-upload",
    Key: uuidv4(),
    Body: file.buffer,
    ContentType: file.mimetype,
  });

  try {
    const response = await s3.send(command);
    console.log("this is res", response)
    return { key };
  } catch (error) {
    console.log("this is error", error);
    return { error };
  }
};

module.exports = uploadToS3
