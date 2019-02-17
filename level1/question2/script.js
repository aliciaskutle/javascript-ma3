//Console.log out elements in JSON file

var videoData = {
  videos: [
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

for (var i = 0; i < videoData.videos.length; i++) {
  var video = videoData.videos[i];
  console.log(video);
  for (var j = 0; j < video.author.data.length; j++) {
    var authorData = video.author.data[j];
    console.log(authorData);
  }
}
