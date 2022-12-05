import fs from "fs";

export const deleteFile = async(filename: string) => {
  // statverifica se um arquivo existe
  try {
    await fs.promises.stat(filename);

  } catch(err) {
    return;
  }

  // responsavel por remover o arquivo
  await fs.promises.unlink(filename);
}