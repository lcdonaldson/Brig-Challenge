$(function () {
  
  var programs = [
    {
      "date": "2012-04-23T18:25:43.511Z",
      "user": "brig",
      "branch": "master",
      "repo": "RockitRepo",
      "img": "http://avatars1.githubusercontent.com/u/1304774?v=3&amp;s=60",
      "comment": "Updated README",
      "id": "1"
    },
    {
      "date": "2012-05-23 T20:15:26",
      "user": "levi",
      "branch": "fork",
      "repo": "RockitRepo",
      "img": "one.png",
      "comment": "Updated README",
      "id":"2"
    },
    {
      "date": "2012-04-23T18:25:43.511Z",
      "user": "richi",
      "branch": "fork",
      "repo": "RockitRepo",
      "img": "two.png",
      "comment": "Updated README",
      "id":"3"
    },
    {
      "date": "2012-04-23T18:25:43.511Z",
      "user": "matt",
      "branch": "fork",
      "repo": "RockitRepo",
      "img": "three.png",
      "comment": "Updated README",
      "id":"4"
    },
    {
      "date": "2012-04-23T18:25:43.511Z",
      "user": "chris",
      "branch": "fork",
      "repo": "RockitRepo",
      "img": "four.png",
      "comment": "Updated README",
      "id":"5"
    },
    {
      "date": "2012-04-23T18:25:43.511Z",
      "user": "troy",
      "branch": "fork",
      "repo": "RockitRepo",
      "img": "five.png",
      "comment": "Updated README",
      "id":"6"
    },
    {
      "date": "2012-04-23T18:25:43.511Z",
      "user": "kevin",
      "branch": "fork",
      "repo": "RockitRepo",
      "img": "six.png",
      "comment": "Updated README",
      "id":"7"
    }

  ]
    
	
  var $ul = $('ul')

  var output = $('#hbs').html()
  var template = Handlebars.compile(output)

  for (i in programs){
    console.log(programs[i])
    var results = template(programs[i])
    $ul.append(results)
    // $ul.append('<li data-id=' + programs[i].id + '>' + '<img src="' + programs[i].img + '">' + '<div>' + programs[i].date + '</div>' + ' ' + '<div>' + programs[i].user '</div>' + ' ' + '<div>' + programs[i].branch '</div>' + ' ' + '<div>' + programs[i].repo '</div>' + ' ' + '<div>' + programs[i].comment '</div>' + '</li>')

  }

})