function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	if(m.toString().length==1)
	{
	  m="0"+m;
	}
	if(s.toString().length==1)
	{
	  s="0"+s;
	}
	//console.log(s > 0);
    var mDisplay = m > 0 ? m + (m == 1 ? ":" : ":") : "00";
    var sDisplay = s > 0 ? s + (s == 1 ? "":"") : "00";
    return mDisplay + sDisplay; 
}
var skinsArray=["Blaupunkt-Frankfurt-1972.jpg","Blaupunkt-Frankfurt-1972a.jpg","Blaupunkt-Frankfurtb.jpg","Becker-Grand-Prix.jpg","Becker-Europa.jpg","Becker-Monza-Sport.jpg","Grundig-Statomat.jpg","Philips-Tourismo.jpg","Hitachi.jpg"];
var Skinindex=0;
function skinChange()
{
	Skinindex++;
   if(Skinindex>=skinsArray.length)
   {
		Skinindex=0;
   }
   console.log(Skinindex);
   var skinImage=document.getElementsByClassName("skinImage");
   skinImage[0].src="skins/"+skinsArray[Skinindex];
   skinImage[0].useMap="#radiomap"+Skinindex;
}

var playList1=[['pop/Cutting Crew - I Just Died in Your Arms (HQ AUDIO).mp3','pop/Modern Talking - Youre My Heart, Youre My Soul HQ.mp3',
'pop/[HQ-FLAC] Bonnie Tyler - Holding Out For A Hero.mp3',"pop/Kim Wilde - You Keep Me Hangin On (HQ AUDIO).mp3",
"pop/Self Control Laura Branigan.mp3","pop/Boney M - Daddy Cool 1976 HQ.mp3",
"pop/Pat Benatar - Love is a Battlefield [LYRICS].mp3","pop/Fancy - Bolero.mp3",
"pop/The Commodores - Nightshift.mp3","pop/Valerie Dore - Get Closer.mp3",
"pop/The Cars - Drive  HQ.mp3","pop/Ursine Vulpine ft. Annaca - Wicked Game (Lyrics).mp3",
"pop/Cyndi Lauper - Change Of Heart.mp3","pop/Jesus And Mary Chain-Just Like Honey.mp3",
"pop/Rufus & Chaka Khan - Ain't Nobody.mp3","pop/C.C. Catch - 1985 - I Can Lose My Heart Tonight.mp3",
"pop/Bad Boys Blue - You're a Woman.mp3","pop/Donna Summer - She Works Hard For The Money.mp3",
"pop/Ottawan - Crazy Music.mp3","pop/Silent Running - Mike & The Mechanics.mp3",
"pop/Kim Carnes - Bette Davis Eyes.mp3","pop/Frida - I Know There's Something Going On.mp3",
"pop/Sandra-In The Heat Of The Night.mp3","pop/Live is Life - Opus.mp3",
"pop/Ricchi  E  Poveri - Sara  Perche  Ti  Amo.mp3","pop/Soft Cell  - Tainted Love.mp3",
"pop/Visage - Fade to Grey.mp3","pop/Jennifer Rush - Destiny.mp3"]
,['rock/KISS I Was Made For Lovin You HQHD (Lyrics in Db).mp3',"rock/Mike Oldfield - Shadow on the Wall.mp3",
"rock/Rainbow-i surrender.mp3","rock/Blue Oyster Cult - (Dont Fear) The Reaper 1976 [Studio Version]cowbell link in description.mp3",
"rock/Bruce Springsteen-Dancing in The Dark (HD).mp3","rock/Journey - Separate Ways (Worlds Apart) (HQ).mp3",
"rock/Rod Stewart  Do You Think Im Sexy (HQ Audio).mp3","rock/Touch Too Much (Highway To Hell Promo Clip, July 1979).mp3",
"rock/W.A.S.P. - Wild Child (The Wraith Tribute).mp3","rock/Foreigner - Urgent.mp3",
"rock/Scorpions - Rock You Like A Hurricane.mp3","rock/Don Felder - Heavy Metal (Takin' A Ride).mp3",
"rock/Aerosmith - Sweet Emotion.mp3","rock/Judas Priest-You've Got Another Thing Comin.mp3",
"rock/Ratt - Lay It Down.mp3","rock/Van Halen  - Ain´t Talkin´´bout Love.mp3",
"rock/Autograph - Turn Up the Radio.mp3","rock/Sisters of Mercy - Detonation Boulevard.mp3",
"rock/The Hooters - All You Zombies.mp3","rock/Twisted Sister - Shoot'em Down.mp3",
"rock/Gary Moore and Phil Lynott-Out in the fields.mp3","rock/Thin Lizzy - Johnny.mp3",
"rock/Golden Earring-Radar love.mp3","rock/Rory Gallagher-Bad Penny.mp3",
"rock/Motorhead - (We Are) The Road Crew.mp3"],
["movie/Angel Of The City - Cobra Soundtrack Official Video - High Quality  HD.mp3",
"movie/Jan Hammer - Crocketts Theme (HQ Audio).mp3","movie/Kenny Loggins - Danger Zone HQ.mp3",
"movie/Paul Engemann - push it to the limit [Scarface soundtrack][HQ] .mp3","movie/Survivor - Eye of the Tiger (HQ).mp3",
"movie/Bee Gees - Stayin' Alive.mp3","movie/Footloose -  Kenny Loggins.mp3",
"movie/Harold Faltermeyer - Axel F.mp3","movie/Pamala Stanley - If Looks Could Kill.mp3",
"movie/Yazoo - Don't Go.mp3","movie/Isaac Hayes - Theme From Shaft.mp3",
"movie/Grace Jones - I've seen that face before.mp3","movie/Christian Bruhn - Ford Taunus.mp3",
"movie/Elmer Bernstein _ - Gold.mp3","movie/Glenn Frey - You Belong to the City.mp3",
"movie/Public Image Ltd-The Order of Death.mp3","movie/Phil Collins - In The Air Tonight.mp3"],
["synt/LazerHawk - King of The Streets.mp3","synt/Ocean Drive -  Miami Nights 1984.mp3",
"synt/F.O.O.L - Highway.mp3","synt/late Night Run _ Batmobile 4K.mp3",
"synt/LEZEN - Midnight.mp3","synt/Kavinsky - Roadgame.mp3",
"synt/Quixotic - Palms.mp3","synt/Cartridge 1987 - The Chase.mp3",
"synt/M.O.O.N. - Dust.mp3","synt/Sol Flare - Striker (feat. Norabeta).mp3",
"synt/ASTRAL CLOUD - ETHEREAL.mp3","synt/Ilija Djokovic - Atom.mp3",
"synt/Malo - March of Progress.mp3","synt/Marvel83' - Synthetic Nights.mp3",
"synt/Lifelike - So Electric.mp3","synt/Dynatron - Pulse Power.mp3",
"synt/Dance with the dead - Only a dream.mp3"]];
var playListNazivi=[['Cutting Crew - I Just Died in Your Arms','Modern Talking - Youre My Heart, Youre My Soul',
'Bonnie Tyler - Holding Out For A Hero',"Kim Wilde - You Keep Me Hangin On",
"Laura Branigan - Self Control","Boney M - Daddy Cool",
"Pat Benatar - Love is a Battlefield","Fancy - Bolero",
"The Commodores - Nightshift","Valerie Dore - Get Closer",
"The Cars - Drive","Ursine Vulpine ft. Annaca - Wicked Game",
"Cyndi Lauper - Change Of Heart","Jesus And Mary Chain-Just Like Honey",
"Rufus & Chaka Khan - Ain't Nobody","C.C. Catch - I Can Lose My Heart Tonight",
"Bad Boys Blue - You're a Woman","Donna Summer - She Works Hard For The Money",
"Ottawan - Crazy Music","Silent Running - Mike & The Mechanics",
"Kim Carnes - Bette Davis Eyes","Frida - I Know There's Something Going On",
"Sandra-In The Heat Of The Night","Live is Life - Opus",
"Ricchi  E  Poveri - Sara  Perche  Ti  Amo","Soft Cell  - Tainted Love",
"Visage - Fade to Grey","Jennifer Rush - Destiny"]
,['KISS - I Was Made For Lovin You',"Mike Oldfield - Shadow on the Wall",
"Rainbow - I surrender","Blue Oyster Cult - (Dont Fear) The Reaper",
"Bruce Springsteen - Dancing in The Dark","Journey - Separate Ways",
"Rod Stewart - Do You Think Im Sexy","AC DC - Touch Too Much",
"W.A.S.P. - Wild Child","Foreigner - Urgent",
"Scorpions - Rock You Like A Hurricane","Don Felder - Heavy Metal (Takin' A Ride)",
"Aerosmith - Sweet Emotion","Judas Priest-You've Got Another Thing Comin",
"Ratt - Lay It Down","Van Halen  - Ain´t Talkin´´bout Love",
"Autograph - Turn Up the Radio","Sisters of Mercy - Detonation Boulevard",
"The Hooters - All You Zombies","Twisted Sister - Shoot'em Down",
"Gary Moore and Phil Lynott-Out in the fields","Thin Lizzy - Johnny",
"Golden Earring-Radar love","Rory Gallagher-Bad Penny",
"Motörhead - (We Are) The Road Crew"],
["Angel Of The City - Cobra",
"Jan Hammer - Crocketts Theme","Kenny Loggins - Danger Zone",
"Paul Engemann - Push it to the limit","Survivor - Eye of the Tiger",
"Bee Gees - Stayin' Alive","Footloose -  Kenny Loggins",
"Harold Faltermeyer - Axel F","Pamala Stanley - If Looks Could Kill",
"Yazoo - Don't Go","Isaac Hayes - Theme From Shaft",
"Grace Jones - I've seen that face before","Christian Bruhn - Ford Taunus",
"Elmer Bernstein - Gold","Glenn Frey - You Belong to the City",
"Public Image Ltd-The Order of Death","Phil Collins - In The Air Tonight"],
["LazerHawk - King of The Streets","Ocean Drive -  Miami Nights 1984",
"F.O.O.L - Highway","late Night Run _ Batmobile 4K",
"LEZEN - Midnight","Kavinsky - Roadgame",
"Quixotic - Palms","Cartridge 1987 - The Chase",
"M.O.O.N. - Dust","Sol Flare - Striker (feat. Norabeta)",
"Astral Cloud - Ethereal","Ilija Djokovic - Atom",
"Malo - March of Progress","Marvel83' - Synthetic Nights",
"Lifelike - So Electric","Dynatron - Pulse Power",
"Dance with the dead - Only a dream"]];
var index=0;
var audio = new Audio();
var activePlaylist=0;
function thisSong()
{
   thisSongDiv=document.getElementById("thisSong");
audio.addEventListener("loadedmetadata", function(_event) {
		thisSongDiv.innerHTML="<span>"+playListNazivi[activePlaylist][index]+" "+secondsToHms(audio.duration)+"</span>";

	});
  
   
   
}
function listNames()
{
  listnamesDiv=document.getElementById("listNames");
 // console.log(playListNazivi[activePlaylist].length);
  listnamesDiv.innerHTML="";
  for(var iter=0;iter<playListNazivi[activePlaylist].length;iter++)
  {
    
	//alert(123)
	if(iter==index)
	{
	  listnamesDiv.innerHTML+="<span style='color:#0bd3d4; text-shadow: black 1px 2px;'>&raquo; "+playListNazivi[activePlaylist][iter]+"</span><br>";
	}
	else
	{
	//alert()
	 listnamesDiv.innerHTML+=" <span style='color:black'>&laquo; <a style='cursor:pointer' onclick='setSong("+iter+")'>"+playListNazivi[activePlaylist][iter]+"</span><br>";
	}
  }
  
}
function setSong(num)
{
  index=num;
  playAudio();
}
function radioStation(musicType)
{
	activePlaylist=musicType;
	index=0;
	playAudio();
}
function playAudio()
{
audio.src=playList1[activePlaylist][index];
audio.play();
audio.onended = function() {
  //alert("The audio has ended");
  nextAudio()
};
listNames();
thisSong();
}
function stopAudio()
{
audio.pause();
}
function nextAudio()
{
index++;
//console.log(playList1.length<index+1);
if(playList1[activePlaylist].length<index+1)
{
index=0;
}
playAudio();
}
function prevAudio()
{
index--;
//console.log(playList1.length<index+1);
if(index<0)
{
index=playList1[activePlaylist].length-1;
}
   //var audio = new Audio('ISurrender.mp3');
playAudio();
}