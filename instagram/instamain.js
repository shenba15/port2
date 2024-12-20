//video-cards
let details=[
    {
        id:1,
        logo:"images/barbie.jpg",
        idname:"hashini1429",
        video:"video/video-1.mp4",
        videotype:"video/mp4",
        like:"0 likes",
        para:"feel good love movie"
    },
    {
        id:2,
        logo:"images/single.jpg",
        idname:"silent-killer",
        video:"video/video-2.mp4",
        videotype:"video/mp4",
        like:"0 likes",
        para:"yellam nanmaikae"
    },
    {
        id:3,
        logo:"images/panda.jpg",
        idname:"dads-liitle-princess",
        video:"video/video-3.mp4",
        videotype:"video/mp4",
        like:"0 likes",
        para:"Make a life beautiful with your loved once"
    },
    {
        id:4,
        logo:"images/love.jpg",
        idname:"Devil_princess",
        video:"video/video-4.mp4",
        videotype:"video/mp4",
        like:"0 likes",
        para:"unnai parkum pothellam..."
    },
    {
        id:5,
        logo:"images/smile.jfif",
        idname:"Heartkiller",
        video:"video/video-5.mp4",
        videotype:"video/mp4",
        like:"0 likes",
        para:"loving you is a losing game"
    },
    {
        id:6,
        logo:"images/heart.jpg",
        idname:"Harleyquinn",
        video:"video/video-6.mp4",
        videotype:"video/mp4",
        like:"0 likes",
        para:"neyum nanum..."
    }
]
//card-section
var cardsection=document.getElementById("insta-card");

//card-container
var cardcontainer=document.createElement("div");
cardcontainer.classList.add("card-container");
cardsection.appendChild(cardcontainer);


//card-row
var cardrow=document.createElement("div");
cardrow.classList.add("card-row");
cardcontainer.appendChild(cardrow);

details.forEach(function(e){

    //cardcol
    var cardcol=document.createElement("div");
    cardcol.classList.add("card-col","reels");
    cardrow.appendChild(cardcol);

    //cardcard
    var cardcard=document.createElement("div");
    cardcard.classList.add("card-card");
    cardcol.appendChild(cardcard);

    //logo
    var cardlogo=document.createElement("div");
    cardlogo.classList.add("card-logo");
    cardcard.appendChild(cardlogo);

    //logoimage
    var logoimage=document.createElement("div");
    logoimage.classList.add("logo-image");
    cardlogo.appendChild(logoimage);

    //image
    var imagepath=document.createElement("img");
    imagepath.setAttribute("src",e.logo);
    logoimage.appendChild(imagepath);

    //idname
    var idna=document.createElement("p");
    idna.innerHTML=e.idname;
    idna.classList.add("id-name");
    cardlogo.appendChild(idna);


    //mainvideo
    var mainvideo=document.createElement("div");
    mainvideo.classList.add("main-video","view");
    cardcard.appendChild(mainvideo);

    //videotag
    var videotag=document.createElement("video");
    videotag.setAttribute("controls",true);
    videotag.classList.add("videoimg");
    mainvideo.appendChild(videotag);

    //source
    var source=document.createElement("source");
    source.setAttribute("src",e.video);
    source.setAttribute("type",e.videotype);
    videotag.appendChild(source);

    //icon
    var icon=document.createElement("div");
    icon.classList.add("card-icon");
    cardcard.appendChild(icon);

    //hearticon
    var hearticon=document.createElement("i");
    hearticon.classList.add("like","fa","fa-heart");
    hearticon.setAttribute("aria-hidden",true);
    icon.appendChild(hearticon);

    //comment
    var commenticon=document.createElement("i");
    commenticon.classList.add("fa", "fa-comment-o");
    commenticon.setAttribute("aria-hidden",true);
    icon.appendChild(commenticon);

    //save
    
    //save
    var save=document.createElement("i");
    save.classList.add("fa", "fa-bookmark-o","saved");
    save.setAttribute("aria-hidden",true);
    icon.appendChild(save);
    
    //para1
    var cardpara1=document.createElement("p");
    cardpara1.classList.add("card-para1","likepara");
    cardpara1.innerHTML=e.like;
    cardcard.appendChild(cardpara1);

    //para2
    var cardpara2=document.createElement("p");
    cardpara2.classList.add("card-para2");
    cardpara2.innerHTML=e.para;
    cardcard.appendChild(cardpara2);
})



//edu-cards
var edudetails=[
    {
        id:1,
        logo:"images/panda.jpg",
        idname:"dads-liitle-princess",
        image:"images/img-1.jpeg",
        like:"0 likes",
        para:"Best Programming Languages"
    },
    {
        id:2,
        logo:"images/barbie.jpg",
        idname:"hashini1429",
        image:"images/img-3.jpeg",
        like:"0 likes",
        para:"Web Development Project Ideas"
    },
    {
        id:3,
        logo:"images/single.jpg",
        idname:"silent-killer",
        image:"images/img-2.jpeg",
        like:"0 likes",
        para:"CSS Position"
    },
    {
        id:4,
        logo:"images/love.jpg",
        idname:"Devil_princess",
        image:"images/img-5.jpeg",
        like:"0 likes",
        para:"Frontend Roadmap"
    },
    {
        id:5,
        logo:"images/smile.jfif",
        idname:"Heartkiller",
        image:"images/img-4.jpeg",
        like:"0 likes",
        para:"Programming constructs"
    },
    {
        id:6,
        logo:"images/heart.jpg",
        idname:"Harleyquinn",
        image:"images/img-6.jpeg",
        like:"0 likes",
        para:"Web Development"
    }
]

//edu-secction
var edusection=document.getElementById("edu-section");
//edu-container
var educontainer=document.createElement("div");
educontainer.classList.add("edu-container");
edusection.appendChild(educontainer);


//edu-row
var edurow=document.createElement("div");
edurow.classList.add("edu-row");
educontainer.appendChild(edurow);


edudetails.forEach(function(e){

    //educol
    var educol=document.createElement("div");
    educol.classList.add("edu-col","educations");
    edurow.appendChild(educol);

    //cardcard
    var educard=document.createElement("div");
    educard.classList.add("edu-card");
    educol.appendChild(educard);

    //logo
    var edulogo=document.createElement("div");
    edulogo.classList.add("edu-logo");
    educard.appendChild(edulogo);

    //logoimage
    var eduimage=document.createElement("div");
    eduimage.classList.add("edu-image");
    edulogo.appendChild(eduimage);

    //image
    var edupath=document.createElement("img");
    edupath.setAttribute("src",e.logo);
    eduimage.appendChild(edupath);

    //idname
    var eduidna=document.createElement("p");
    eduidna.innerHTML=e.idname;
    eduidna.classList.add("eduid-name");
    edulogo.appendChild(eduidna);


    //edumainimage
    var edumainimage=document.createElement("div");
    edumainimage.classList.add("edumain-image","view");
    educard.appendChild(edumainimage);

    //eduimgtag
    var eduimgtag=document.createElement("img");
    eduimgtag.setAttribute("src",e.image);
    eduimgtag.classList.add("videoimg");
    edumainimage.appendChild(eduimgtag);

    //icon
    var eduicon=document.createElement("div");
    eduicon.classList.add("edu-icon");
    educard.appendChild(eduicon);

    //hearticon
    var eduhearticon=document.createElement("i");
    eduhearticon.classList.add("like","fa","fa-heart");
    eduhearticon.setAttribute("aria-hidden",true);
    eduicon.appendChild(eduhearticon);

    //comment
    var educommenticon=document.createElement("i");
    educommenticon.classList.add("fa", "fa-comment-o");
    educommenticon.setAttribute("aria-hidden",true);
    eduicon.appendChild(educommenticon);

    //save
    var edusave=document.createElement("i");
    edusave.classList.add("fa", "fa-bookmark-o","saved");
    edusave.setAttribute("aria-hidden",true);
    eduicon.appendChild(edusave);
    
    //para1
    var educardpara1=document.createElement("p");
    educardpara1.classList.add("educard-para1","likepara");
    educardpara1.innerHTML=e.like;
    educard.appendChild(educardpara1);

    //para2
    var educardpara2=document.createElement("p");
    educardpara2.classList.add("educard-para2");
    educardpara2.innerHTML=e.para;
    educard.appendChild(educardpara2);
})


//for likes
var likes=document.getElementsByClassName("like");
console.log(likes);
var likespara=document.getElementsByClassName("likepara");
console.log(likespara);

for(let i=0; i<likes.length;i++){
    var count=0,value=true;
    likes[i].addEventListener("click",function(){
        if(value==true){
        likes[i].style.color="red";
        //likes[i].style.fontSize="40px";
        likes[i].style.transform="scale(1.2)";
        count=count+1;
        likespara[i].innerHTML=count+" likes";
        value=false;
        }  
        else{
            likes[i].style.color="black";
            //likes[i].style.fontSize="30px";
            likes[i].style.transform="scale(1)";
            count=count-1;
            likespara[i].innerHTML=count+" likes"; 
            value=true;        
       }    
    })
}


//for filter
var home=document.getElementById("home");
console.log(home);
var reel=document.getElementById("reel");
console.log(reel);
var education=document.getElementById("education");
console.log(education);

var reels=document.getElementsByClassName("reels");
console.log(reels);
var educations=document.getElementsByClassName("educations");
console.log(educations);

reel.addEventListener("click",function(){
    for(let i=0; i<reels.length;i++){
    educations[i].style.display="none";
    reels[i].style.display="block";
}
})

education.addEventListener("click",function(){
    for(let i=0; i<educations.length;i++){
    reels[i].style.display="none";
    educations[i].style.display="block";
}
})

home.addEventListener("click",function(){
    for(let i=0; i<views.length;i++){
        reels[i].style.display="block";
        educations[i].style.display="block";
    }
})

//saved button
var save=document.getElementsByClassName("saved");
console.log(save);

//video or image
var views=document.getElementsByClassName("view");
console.log(views);

//savedcontent
var likecontent=document.getElementById("likecontent");
console.log(likecontent);

//row
var cardrows=document.getElementsByClassName("card-row");
console.log(cardrows);

/*for (let i=0;i<save.length;i++){
    save[i].addEventListener("click",function(){
        for(j=0;j<views.length;j++){
        localStorage.setItem("card",views[j]);
        }
    })
}*/

likecontent.addEventListener("click",function(){
    window.location="saveinsta.html";
})

    for(let i=0;i<save.length;i++){
        save[i].addEventListener("click",function(){
        save[i].style.color="red";
        likecontent.style.color="red";
        var a=views[i].innerHTML; 
        console.log(a);
       localStorage.setItem("cards",a);
        // let cards={
        //     savecard:a,
        // }
        // savecards(cards);
    })
}


// function savecards(imagevideo){
//     const storedata=JSON.parse(localStorage.getItem("imagevideo"))||[];
//     storedata.push(imagevideo)
//     localStorage.setItem("imagevideo",JSON.stringify(storedata));
// }


//usernmae

let instausername=document.getElementById("userpara");
let getuserpara=localStorage.getItem("instausername");
instausername.innerHTML=getuserpara;