document.querySelector('button').addEventListener('click',getFetch)

function getFetch(){
    const choice = document.querySelector('input').value
    console.log(choice)
  
    const url = `https://api.nasa.gov/planetary/apod?api_key=A7ryHHTPNGgggY3WhwyVP3q1dRag8g5efFx9XWl2&date=${choice}`
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          if( data.media_type === 'image' ){
            document.querySelector('.picOfDay').style.display='block' /* turn the display back on, if was turned to none before*/
            document.querySelector('.picOfDay').src = data.hdurl
            document.querySelector('iframe').style.display='none'/*   if an image shows, the space alotted for iframe will go away */

          }else if(data.media_type === 'video'){
            document.querySelector('iframe').style.display='block' /* turn the display back on, if was turned to none before*/
            document.querySelector('iframe').src = data.url
             document.querySelector('.picOfDay').style.display='none' /* if a video shows, the space alotted for img will go away */
          }
          document.querySelector('h2').innerText = data.title;
          document.querySelector('h3').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }