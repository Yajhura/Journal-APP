export const fileUpload = async (file) => {
  const urlCloud = `api.cloudinary.com/v1_1/dutiignsm/upload`;

  const formDate = new FormData();

  formDate.append("upload_preset", "react-journal");
  formDate.append("file", file);

  try {
    const resp = await fetch(`https://${urlCloud}`, {
      method: "POST",
      body: formDate,
    });

    if (resp.ok) {
      const data = await resp.json();
      return data.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (error) {
    console.log(error);
  }
};
