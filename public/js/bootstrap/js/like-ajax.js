console.log('ajax-like button working !!');

let likebtn = document.getElementById('likebtn');

likebtn.addEventListener('click',handleLikeBtn);

function handleLikeBtn(){ 
    console.log('inside handleLikeBtn');

    const xhr = new XMLHttpRequest();
  
  
    $(document).ready(function(){
        $("button").click(function(){
          $.post("demo_test_post.asp",
          {
            user: user.id
          },
          function(data,status){
            alert("Data: " + data + "\nStatus: " + status);
          });
        });
      });

    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

    xhr.onprogress = function(){
        console.log('on progress !!');
    }

    xhr.onload = function(){

            if(this.status==200){
        console.log(this.responseText);
            }else{
                console.log('some error occured !!');
            }
    }
    xhr.send();

}