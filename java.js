var a = prompt("Hin bhai kara Semester hyi ")
 if(a==5){

     var b = prompt("  kar Regular ya Self ")
    var c = prompt("Code chaya .. Y / N")
    }
 else
 alert("Please Enter Your Correct  Semester")

if(a==5 && b== 'Regular' || b== 'regular' &&  c=='N' || c=='n'){

  let div = document.querySelector(".boday")
  div.innerHTML=''
  div.innerHTML = ` <table class="glass">
             <tr>
        <th  colspan="7">      
                
                Time Table


            </th>


        </tr>
        <tr>
            <th rowspan="7">
                CS-Semester-5(Regular)

            </th>


        </tr>

        <tr style="background-color: rgb(25, 135, 82);">
            <td> WEEKDAYS </td>
            <tH> Monday </tH>
            <tH> Tuesday </tH>
            <tH> Wednesday </tH>
            <tH> Thursday </tH>
            <tH> Friday </tH>
            
        </tr>
        <tr>
            <td> 8:00-9:30 </td>
            <td> Mr.Shaeer Multimedia Systems and Design(CSSC-301) CS-ITRoom18 </td>
            <td> Dr.Eid Rehman Theory of Automata(CSCC-301) CS-ITRoom19 </td>

            <td> </td>
            <td> Dr.Eid Rehman Theory of Automata(CSCC-301) CS-ITRoom18 </td>
            <td> Mr.Shazeb Object Oriented Analysis and Design(CSSC-307) CS-ITRoom18 </td>
             
        </tr>
        <tr>
            <td>9:30-11:00 </td>
            <td> Mr.Shazeb Object Oriented Analysis and Design(CSSC-307) CS-ITRoom18 </td>
            <td> Mr.Shaeer Multimedia Systems and Design(CSSC-301) CS-ITRoom18 </td>
            <td> </td>
            <td> </td>
            <td> Mr. Rehan Calculus-II(MATH-5103) CS-ITRoom18 </td>
            
        </tr>
        <tr>
            <td>11:00-12:30</td>
            <td> Ms.Warda Ahhmad Design & Analysis of Algorithm CS-ITRoom18 </td>
            <td> Ms.Moniba Iqbal Web Systems and Technologies(CSEC-301) CS-LAB </td>
            <td> </td>
            <td> Mr. Rehan Calculus-II(MATH-5103) CS-ITRoom18 </td>
            
            <td> Ms.Moniba Iqbal Web Systems and Technologies(CSEC-301) CS-LAB </td>
            
            
        </tr>
        <tr>
            <td>12:30-2:00 </td>
            <td> </td>
            <td> Dr. Qari M. Zafar Iqbal Quran Studies(URCQ-6101)(12:30-1:30) CS-ITRoom19 </td>
            <td> </td>
            <td> Ms.Warda Ahhmad Design & Analysis of Algorithm CS-ITRoom18 </td>
            <td> </td>


        </tr>
        <tr>
            <td> 2:00-3:30</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>


        </tr>


    </table> `;


 }
 else if(c=='Y' || c=='y'){
 
    let div = document.querySelector(".boday")
     
    div.innerHTML=''
    div.innerHTML = `  <code><pre>
     &lt;table class="glass"&gt;
    &lt;tr&gt;
&lt;th  colspan="7"&gt;      
       
       Time Table


   &lt;/th&gt;


&lt;/tr&gt;
&lt;tr&gt;
   &lt;th rowspan="7"&gt;
       CS-Semester-5(Regular)

   &lt;/th&gt;


&lt;/tr&gt;

&lt;tr style="background-color: rgb(25, 135, 82);"&gt;
   &lt;td&gt; WEEKDAYS &lt;/td&gt;
   &lt;tH&gt; Monday &lt;/tH&gt;
   &lt;tH&gt; Tuesday &lt;/tH&gt;
   &lt;tH&gt; Wednesday &lt;/tH&gt;
   &lt;tH&gt; Thursday &lt;/tH&gt;
   &lt;tH&gt; Friday &lt;/tH&gt;
   
&lt;/tr&gt;
&lt;tr&gt;
   &lt;td&gt; 8:00-9:30 &lt;/td&gt;
   &lt;td&gt; Mr.Shaeer Multimedia Systems and Design(CSSC-301) CS-ITRoom18 &lt;/td&gt;
   &lt;td&gt; Dr.Eid Rehman Theory of Automata(CSCC-301) CS-ITRoom19 &lt;/td&gt;

   &lt;td&gt; &lt;/td&gt;
   &lt;td&gt; Dr.Eid Rehman Theory of Automata(CSCC-301) CS-ITRoom18 &lt;/td&gt;
   &lt;td&gt; Mr.Shazeb Object Oriented Analysis and Design(CSSC-307) CS-ITRoom18 &lt;/td&gt;
    
&lt;/tr&gt;
&lt;tr&gt;
   &lt;td&gt;9:30-11:00 &lt;/td&gt;
   &lt;td&gt; Mr.Shazeb Object Oriented Analysis and Design(CSSC-307) CS-ITRoom18 &lt;/td&gt;
   &lt;td&gt; Mr.Shaeer Multimedia Systems and Design(CSSC-301) CS-ITRoom18 &lt;/td&gt;
   &lt;td&gt; &lt;/td&gt;
   &lt;td&gt; &lt;/td&gt;
   &lt;td&gt; Mr. Rehan Calculus-II(MATH-5103) CS-ITRoom18 &lt;/td&gt;
   
&lt;/tr&gt;
&lt;tr&gt;
   &lt;td&gt;11:00-12:30&lt;/td&gt;
   &lt;td&gt; Ms.Warda Ahhmad Design & Analysis of Algorithm CS-ITRoom18 &lt;/td&gt;
   &lt;td&gt; Ms.Moniba Iqbal Web Systems and Technologies(CSEC-301) CS-LAB &lt;/td&gt;
   &lt;td&gt; &lt;/td&gt;
   &lt;td&gt; Mr. Rehan Calculus-II(MATH-5103) CS-ITRoom18 &lt;/td&gt;
   
   &lt;td&gt; Ms.Moniba Iqbal Web Systems and Technologies(CSEC-301) CS-LAB &lt;/td&gt;
   
   
&lt;/tr&gt;
&lt;tr&gt;
   &lt;td&gt;12:30-2:00 &lt;/td&gt;
   &lt;td&gt; &lt;/td&gt;
   &lt;td&gt; Dr. Qari M. Zafar Iqbal Quran Studies(URCQ-6101)(12:30-1:30) CS-ITRoom19 &lt;/td&gt;
   &lt;td&gt; &lt;/td&gt;
   &lt;td&gt; Ms.Warda Ahhmad Design & Analysis of Algorithm CS-ITRoom18 &lt;/td&gt;
   &lt;td&gt; &lt;/td&gt;


&lt;/tr&gt;
&lt;tr&gt;
   &lt;td&gt; 2:00-3:30&lt;/td&gt;
   &lt;td&gt; &lt;/td&gt;
   &lt;td&gt; &lt;/td&gt;
   &lt;td&gt; &lt;/td&gt;
   &lt;td&gt; &lt;/td&gt;
   &lt;td&gt; &lt;/td&gt;


&lt;/tr&gt;


&lt;/table&gt;
      </code></pre>`;


 }