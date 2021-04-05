var onum;
    var num;
    var r = document.querySelector(':root');

        function setIDduos(){
            r.style.setProperty('--trios', 'none');
            r.style.setProperty('--duos', 'flex');

            onum = (Math.floor(Math.random() * (0 - 16)) - 1) * -1;
            if (onum == 17)
                onum = 16;

            var img = document.getElementById("image1");
            var tex = document.getElementById("text1");

            document.getElementById("id1").innerHTML=onum;
            changeImage(onum, img, tex);

            num = (Math.floor(Math.random() * (0 - 16)) - 1) * -1;

            if (num == 17)
                num = 16;

            while (num == onum){
                num = (Math.floor(Math.random() * (0 - 16)) - 1) * -1;
                if (num == 17)
                    num = 16;
            }

            img = document.getElementById("image2");
            tex = document.getElementById("text2");
            document.getElementById("id2").innerHTML=num;
            changeImage(num, img, tex);
        }

        function setIDtrios(){
            r.style.setProperty('--duos', 'none');
            r.style.setProperty('--trios', 'flex');

            onum = (Math.floor(Math.random() * (0 - 16)) - 1) * -1;
            if (onum == 17)
                onum = 16;

            var img = document.getElementById("image3");
            var tex = document.getElementById("text3");

            document.getElementById("id1").innerHTML=onum;
            changeImage(onum, img, tex);

            num = (Math.floor(Math.random() * (0 - 16)) - 1) * -1;

            if (num == 17)
                num = 16;

            while (num == onum){
                num = (Math.floor(Math.random() * (0 - 16)) - 1) * -1;
                if (num == 17)
                    num = 16;
            }

            img = document.getElementById("image4");
            tex = document.getElementById("text4");
            document.getElementById("id2").innerHTML=num;
            changeImage(num, img, tex);

            var nnum = (Math.floor(Math.random() * (0 - 16)) - 1) * -1;

            if (nnum == 17)
                nnum = 16;

            while (nnum == onum || nnum == num){
                nnum = (Math.floor(Math.random() * (0 - 16)) - 1) * -1;
                if (nnum == 17)
                    nnum = 16;
            }

            img = document.getElementById("image5");
            tex = document.getElementById("text5");
            document.getElementById("id3").innerHTML=nnum;
            changeImage(nnum, img, tex);
        }

        function changeImage(id, img, tex)
        {

        switch (id) {
            case 1:
                img.src="images/Bloodhound.png";
                tex.innerHTML="Bloodhound"
            break;
            case 2:
                img.src="images/Gibraltar.png";
                tex.innerHTML="Gibraltar"
            break;
            case 3:
                img.src="images/Lifeline.png";
                tex.innerHTML="Lifeline"
            break;
            case 4:
                img.src="images/Pathfinder.png";
                tex.innerHTML="Pathfinder"
            break;
            case 5:
                img.src="images/Wraith.png";
                tex.innerHTML="Wraith"
            break;
            case 6:
                img.src="images/Bangalore.png";
                tex.innerHTML="Bangalore"
            break;
            case 7:
                img.src="images/Caustic.png";
                tex.innerHTML="Caustic"
            break;
            case 8:
                img.src="images/Mirage.png";
                tex.innerHTML="Mirage"
            break;
            case 9:
                img.src="images/Octane.png";
                tex.innerHTML="Octane"
            break;
            case 10:
                img.src="images/Wattson.png";
                tex.innerHTML="Wattson"
            break;
            case 11:
                img.src="images/Crypto.png";
                tex.innerHTML="Crypto"
            break;
            case 12:
                img.src="images/Revenant.png";
                tex.innerHTML="Revenant"
            break;
            case 13:
                img.src="images/Loba.png";
                tex.innerHTML="Loba"
            break;
            case 14:
                img.src="images/Rampart.png";
                tex.innerHTML="Rampart"
            break;
            case 15:
                img.src="images/Horizon.png";
                tex.innerHTML="Horizon"
            break;
            case 16:
                img.src="images/Fuse.png";
                tex.innerHTML="Fuse"
            break;
        }
        
        
        return false;
        }