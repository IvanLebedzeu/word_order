$(document).ready(function() {
  $("#form-one").submit(function() {
    event.preventDefault();
    function onlyUnique(value, index, self){
      return self.indexOf(value) === index;
    }

    var newSentence = $("input#sent").val();
    var newSentenceArray = newSentence.split(' ');
    var uniqueArray = newSentenceArray.filter(onlyUnique);
    $("#output").text(uniqueArray);
  })
})