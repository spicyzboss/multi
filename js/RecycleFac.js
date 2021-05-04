let reFac =  `
<!--พื้น-->
<g transform="translate(-130 -20) skewY(-26.5) skewX(45)">
    <rect width="45" height="62" x="30" y="140" fill="none" />
</g>
<g transform="translate(-20 -40)">
<!--ข้าง-หน้า-->
<g transform="skewY(26.5)">
    <rect width="60" height="15" x="70" y="20" fill="#525252"/>  
    <rect width="60" height="15" x="70" y="20" fill="url(#recfac)"/>  
</g>
<!--ข้าง-->
<g transform="skewY(-26.5)">
    <rect width="30" height="15" x="130" y="150"  fill="#424242" />
    <rect width="30" height="15" x="130" y="150"  fill="url(#recfac)"/> 
 <!--ประตู-->
    <rect width="20" height="12" x="135" y="153"  fill="#868686" stroke="#4D4D4D" stroke-width="0.8" />
    <rect width="20" height="12" x="135" y="153"  fill="url(#recfacdoor)" >
</g>

 <!--บน-->
<g transform=" skewY(26.5) skewX(-45)">
    <rect width="62" height="20" x="89.5" y="-14.5"  fill="#626262" />
    <rect width="62" height="20" x="89.5" y="-14.5" fill="url(#recfacroof)"/> 
    <rect width="62" height="20" x="89.5" y="5.5"  fill="#626262" />
    <rect width="62" height="20" x="89.5" y="5.5" fill="url(#recfacroof)"/> 
    <rect width="62" height="1" x="89.5" y="4.5"  fill="#626262" />
</g>
 <!--logo-->

<g transform="skewY(26.5)">
    <rect width="30" height="15" x="100" y="-10" fill="#999"/>  
<rect width="30" height="15" x="100" y="-10" fill="url(#recyclelogo)"/>  
</g> 

<g transform="skewY(-26.5)">
    <rect width="3" height="15" x="129.8" y="120"  fill="#888" />
</g>

<g transform=" skewY(26.5) skewX(-45)">
    <rect width="30.3" height="3.2" x="90" y="-13"  fill="#aaa" />
</g>
</g>
        `