const text = "Ayy K. Dot\n\
Yeah, yeah\n\
Can we get it how we used to get it like when Top had the red charger?\n\
Can we get it how we used to get it like when Top had the red charger?\n\
Can we get it how we used to get it?\n\
Cap on, and I got racks on\n\
Spent four nights in the country I like, then I take my rich ass back home\n\
Blow so bright, I could make make moonlight\n\
See this ain't like your pheromones\n\
Blew one, big gun, bare tone\n\
Who won? We won, you're home\n\
We old school like capital\n\
My old school made doctor note\n\
My old school made hard knock\n\
Black on black, my coupe ain't strap, I ain't balling on these hard tops\n\
I told y'all to call Top, now my number call blocked\n\
I don't miss, I call shot\n\
Hol' up, yeah\n\
Cap on and I got racks on (and I got racks on)\n\
And I produced that diesel, I could put Shaq on (I could put Shaq, ayy)\n\
Nigga, your bitch gon' leave, you ain't got a backbone (you ain't got, hol' up)\n\
I don't rely on people, I just go and bread chase (whoa)\n\
This so fucking door, I might catch a fed case (whoa)\n\
You ain't getting money, nigga, then you dead weight (whoa)\n\
Got the drop on 'em, there he go, checkmate (whoa)\n\
We go drop on 'em, y'all better play it safe (whoa)\n\
Cap on, and I got racks on\n\
Don't be bitter, your dope, they reconsider that shit, be stepped on\n\
Eastside Johnny, way out that project, but then I get my rep on\n\
Fuck your feeling, no Preston, bitch, I kill it, I bring that check home\n\
We old school like domino\n\
My old school made lawyers know\n\
My old school a match box\n\
Black on black, bad bitch in the back, we ballin' on a hard top\n\
Dot told y'all to call Top\n\
Now my number call blocked\n\
We don't miss, we call shots, swervin'\n\
I pay 'em no mind mind because I curve 'em\n\
She said I look way better in person\n\
I told her I do better when I'm workin'\n\
You scared motherfucker, go to churches\n\
Right back in this bitch, take a flick\n\
Hoe, what's happening (yeah), we don't politic\n\
Money clip, like it's fashion (yeah)\n\
Me and Rock go back like, flipping matresses\n\
Me and Dot go back like knocking adresses\n\
Cap on, cap on, drum hold thirty, no add-on\n\
Lil' man mad, don't wanna go bad on\n\
Big heat stamp fold out, when you lack on\n\
You ain't no man, you a mouse in a rat hole\n\
I hold band, whole stack, that's factual\n\
Call big ten on a island bashful\n\
Fuck your plan, I'ma burn that castle\n\
Fuck that clan, I'ma burn that task force\n\
It's sick murder when I say go\n\
Hoppin' out that van with a black ski mask and a great big murder when I say go\n\
Man, I took my chance, and I paint like that, let' see how further it might go\n\
And it just might hurt you when I go\n\
And my name might curse you when I go, bitch\n\
In God we trust\n\
Fear no man, but in god we trust\n\
Both palm in hand, prayin' I stay up\n\
I know you try your best but it's not like us\n\
Wow, oh you say you got a bad one\n\
Wow, I can tell you never had one\n\
Wow, we back to back acting manie\n\
Wow, east-side Johnny going stupid, stupid, stupid\n\
Wow";
let idx = 0;
let start = 0;
let i = 1;
let vid = document.getElementById("myVideo");
let volume = 100;
let intr = 0

function start_song(){
    vid.play();
    intr = setInterval(write_text, 45);

    document.getElementsByClassName('btn1')[0].style.display = 'block';
    document.getElementsByClassName('btn3')[0].style.display = 'none';
}

function updateVolume(){
    var volume_inc = document.getElementById("volume_inc").value;
    vid.volume = volume_inc / 100;
}

function write_text(){
    document.getElementById('1').innerText = text.slice(start, idx);
    idx ++;

    
    if(idx >= text.length){
        idx = 0;
    }
    var x = idx % 200;
    if(x == 0){
        start = 200 * i;
        i ++;
    }
}

function myStopFunction(){
  clearInterval(intr);
  vid.pause()
  document.getElementsByClassName('btn2')[0].style.display = 'block';
  document.getElementsByClassName('btn1')[0].style.display = 'none';
}

function myContinueFunction(){
    
    intr = setInterval(write_text, 45);
    vid.play();
    document.getElementsByClassName('btn2')[0].style.display = 'none';
    document.getElementsByClassName('btn1')[0].style.display = 'block';
}