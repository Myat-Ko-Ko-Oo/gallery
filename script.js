photo_array=[
    {id:"image_1",
    url:"url(../gallery/image/1.jpg)"},
    {id:"image_2",
    url:"url(../gallery/image/2.jpg)"},
    {id:"image_3",
    url:"url(../gallery/image/3.jpg)"},
    {id:"image_4",
    url:"url(../gallery/image/4.jpg)"},
    {id:"image_5",
    url:"url(../gallery/image/5.jpg)"},
    {id:"image_6",
    url:"url(../gallery/image/6.jpg)"},
    {id:"image_7",
    url:"url(../gallery/image/7.jpg)"},
    {id:"image_8",
    url:"url(../gallery/image/8.jpg)"},
    {id:"image_9",
    url:"url(../gallery/image/9.jpg)"},
    {id:"image_10",
    url:"url(../gallery/image/10.jpg)"},
    {id:"image_11",
    url:"url(../gallery/image/11.jpg)"},
    {id:"image_12",
    url:"url(../gallery/image/12.jpg)"},
    {id:"image_13",
    url:"url(../gallery/image/13.jpg)"},
]
script_array = []
for(el of photo_array){
    script_array.push(el.url)
}

image_container = document.querySelector(".image_container")
overlay = document.querySelector(".overlay")
body =document.querySelector("body")
right = document.querySelector(".fa-circle-right")
left = document.querySelector(".fa-circle-left")
cross = document.querySelector(".fa-xmark")
for(el of photo_array){
id = el.id
url = el.url
// console.log(el.id,el.url)
image_container.innerHTML +=`<div onclick="pop(id);" id="${id}" class="image" style="background-image:${url}; ">
</div>`



}

pop=(id)=>{
   overlay.style.display = "block";
   body.style.overflowY = "hidden"
//    console.log(photo_array.indexOf("image_1"));
    for(el of photo_array){
        if(el.id === id){
            overlay.style.backgroundImage = el.url
            overlay.classList.add(`${el.id}`)
            console.log(el.url)
            // return
        }
        else{
            console.log(
                "error in data input not Match"
            )
            // return
        }
    }


}

right.addEventListener("click",()=>{
    // console.log(overlay.style.backgroundImage)
    image = overlay.className.split(' ')[2]
    for(el of photo_array){
        
        if(el.id === image){
            // console.log(el.url)}
                index = script_array.indexOf(el.url)
                console.log(index)

    if (index <photo_array.length-1){
        index++
        
        overlay.style.backgroundImage = script_array[index]
        overlay.classList.replace(image,`${photo_array[index].id}`)

        
    }else{
            index =0
           console.log("enter")
            overlay.style.backgroundImage = script_array[index]
            overlay.classList.replace(image,`${photo_array[index].id}`)
            
        }
    
        

            }

    }


})
left.addEventListener("click",()=>{
    image = overlay.className.split(' ')[2]
    for(el of photo_array){
        
        if(el.id === image){
            // console.log(el.url)}
                index = script_array.indexOf(el.url)
                console.log(index)

    if (index >0){
        index--
        
        overlay.style.backgroundImage = script_array[index]
        overlay.classList.replace(image,`${photo_array[index].id}`)

        
    }else{
            index =script_array.length-1
           console.log("enter")
            overlay.style.backgroundImage = script_array[index]
            overlay.classList.replace(image,`${photo_array[index].id}`)
            
        }
    
        

            }

    }
})
cross.addEventListener("click",()=>{
    overlay.style.display = "none";
   body.style.overflowY = ""
})

    imagepopnone=()=>{
        overlay.style.display = "none";
        body.style.overflowY = ""
    }