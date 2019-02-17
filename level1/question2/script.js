//Console.log out elements in JSON file

var videoData = {
  video: [
    {
      id: 12312412312,
      name: "Ecuaciones Diferenciales",
      url: "/video/math/edo/12312412312",
      author: {
        data: [
          {
            name_author: "Alejandro Morales",
            url: "/author/alejandro-morales",
            type: "master"
          }
        ]
      }
    }
  ]
};

for (i = 0; i < videoData.video.length; i++) {
  output = videoData.video[i];
  {
    for (i = 0; i < videoData.video.data.length; i++) {
      output = videoData.video.data[i];
    }
    console.log(videoData.video[i]);
  }
}
