let imgBox = document.querySelector('.imgBox')
let qrImage = document.querySelector('#qrImage')
let qrText = document.querySelector('#qrText')
let button = document.querySelector('#btn')




function generateQR(){
   if(qrText.value.length > 0){
      qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value
   imgBox.classList.add('show-img')
   } else{
      qrText.classList.add('error')
      setTimeout(function(){
         qrText.classList.remove('error')
      }, 500)
   }
   
}

button.addEventListener('click', function(){
   generateQR()
})