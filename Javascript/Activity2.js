var charcter = ['&','+','%','&ensp; ',' &ensp; ', ' &ensp;', ' &nbsp;&nbsp; ', '&nbsp;',' &nbsp; ',' &nbsp;' ]; 
        function andPlusPercent(){
            for (var i=0; i < 6; i++) {
                
                //LETTER G
                for (var g=0; g<6; g++){ 
                    if(i==0 || (i==4 && g==5) || i==5 || g==0 || i==3 ){
                    document.write(charcter[0]);
                    } else{
                        document.write(charcter[3]);
                    }
                }
                document.write(charcter[3]);
                //LETTER A  
                for (var a=0; a<6; a++){ 
                    if( a==0 || (a<6 && i==0) || a== 5 || i == 3){
                    document.write(charcter[0]);
                    } else{
                        document.write(charcter[4]);
                    }
                }
                document.write(charcter[3]);
                //LETTER R
                for (var r=0; r<6; r++){ 
                    if(r==0 || (r<5 && (i==0 || i == 3)) || (r == 5 && (i>0 &&i<3)) || (r==5&&i>3)){
                    document.write(charcter[0]);
                    } else{
                        document.write(charcter[5]);
                    }
                }
                document.write(charcter[3]);
                //LETTER C
                for (var c=0; c<6; c++){ 
                    if(c==1 || (i== 0 && c>0) || (i==5 && c>0)){
                    document.write(charcter[0]);
                    } else if(c == 0 || c == 5){
                        document.write(charcter[4]);
                    } else{
                        document.write(charcter[6]);
                    }
                }
                document.write(charcter[3]);
                // LETTER I
                for (var x=0; x<6; x++){ 
                    if(x==3){
                    document.write(charcter[0]);
                    } else{
                        document.write(charcter[7]);
                    }
                }
                document.write(charcter[3]); 
                //LETTER A
                for (var a=0; a<6; a++){ 
                    if( a==0 || (a<6 && i==0) || a== 5 || i == 3){
                    document.write(charcter[0]);
                    } else{
                        document.write(charcter[4]);
                    }
                
                }
                document.write("<br>");
                
             }
             plus();
             percent();
        }

        function plus(){
            let i = 0;
            while(i < 6) {
                //LETTER G
                let g = 0;
                while (g<6){ 
                    if(i==0 || (i==4 && g==5) || i==5 || g==0 || i==3 ){
                    document.write(charcter[1]);
                    } else{
                        document.write(charcter[8]);
                    }
                    g++;
                }
                document.write(charcter[3]);
                //LETTER A  
                let a =0;
                while (a<6) { 
                    if( a==0 || (a<6 && i==0) || a== 5 || i == 3){
                    document.write(charcter[1]);
                    } else{
                        document.write(charcter[8]);
                    }
                    a++;
                }
                document.write(charcter[3]);
                //LETTER R
                let r=0;
                while (r<6){
                    if(r==0 || (r<5 && (i==0 || i == 3)) || (r == 5 && (i>0 &&i<3)) || (r==5&&i>3)){
                    document.write(charcter[1]);
                    } else if((r==5 && i==0)||(r==5 && i==3)){
                            document.write(charcter[9]);
                    } else{
                        document.write(charcter[8]);
                    }
                    r++; 
                }
                document.write(charcter[3]);
                //LETTER C
                let c=0;
                while (c<6){ 
                    if(c==1 || (i== 0 && c>0) || (i==5 && c>0)){
                    document.write(charcter[1]);
                    } else{
                        document.write(charcter[8]);
                    }
                    c++;
                }
                document.write(charcter[3]);
                // LETTER I
                let x=0;
                while (x<6){ 
                    
                    if(x==3){
                    document.write(charcter[1]);
                    } else{
                        document.write(charcter[8]);
                    }
                    x++
                }
                document.write(charcter[3]); 
                //LETTER A
                let b=0;
                while (b<6){ 
                    if( b==0 || (b<6 && i==0) || b== 5 || i == 3){
                    document.write(charcter[1]);
                    } else{
                        document.write(charcter[8]);
                    }
                    b++;
                }
                document.write("<br>");
                i++;
             }

            }
            function percent(){
            let i = 0;
                do{
                    //LETTER G
                    let g = 0;
                    do{ 
                        if(i==0 || (i==4 && g==5) || i==5 || g==0 || i==3 ){
                        document.write(charcter[2]);
                        } else{
                            document.write(charcter[4]);
                        }
                        g++;
                    }
                    while (g<6);
                    document.write(charcter[3]);

                    //LETTER A  
                    let a =0;
                    do{ 
                        if( a==0 || (a<6 && i==0) || a== 5 || i == 3){
                        document.write(charcter[2]);
                        } else{
                            document.write(charcter[4]);
                        }
                        a++;
                    }
                    while (a<6);
                    document.write(charcter[3]);

                    //LETTER R
                    let r=0;
                    do{
                        if(r==0 || (r<5 && (i==0 || i == 3)) || (r == 5 && (i>0 &&i<3)) || (r==5&&i>3)){
                        document.write(charcter[2]);
                        } else if((r==5 && i==0)||(r==5 && i==3)){
                            document.write(charcter[9]);
                        } else{
                            document.write(charcter[4]);
                        }
                        r++; 
                    }
                    while (r<6);
                    document.write(charcter[3]);

                    //LETTER C
                    let c=0;
                    do{ 
                        if(c==1 || (i== 0 && c>0) || (i==5 && c>0)){
                        document.write(charcter[2]);
                        } else{
                            document.write(charcter[4]);
                        }
                        c++;
                    }
                    while (c<6);
                    document.write(charcter[3]);

                    // LETTER I
                    let x=0;
                    do{ 
                        
                        if(x==3){
                        document.write(charcter[2]);
                        } else{
                            document.write(charcter[3]);
                        }
                        x++
                    }
                    while (x<6);
                    document.write(charcter[3]); 

                    //LETTER A
                    let b=0;
                    do{ 
                        if( b==0 || (b<6 && i==0) || b== 5 || i == 3){
                        document.write(charcter[2]);
                        } else{
                            document.write(charcter[4]);
                        }
                        b++;
                    }
                    while (b<6);
                    document.write("<br>");
                    i++;
                    
                }
                while(i < 6);
            }