function sum()
        {
            var a=document.getElementById("t1").value;
                var b=document.getElementById("t2").value;
                var c=(a*1)+(b*1);
                document.getElementById("t3").value=c;
        }
        function min()
        {
            var a=document.getElementById("t1").value;
                var b=document.getElementById("t2").value;
                var c=parseInt(a)-parseInt(b);
                document.getElementById("t3").value=c;
        }
        function mul()
        {
            var a=document.getElementById("t1").value;
                var b=document.getElementById("t2").value;
                var c=parseInt(a)*parseInt(b);
                document.getElementById("t3").value=c;
        }
        function div()
        {
            var a=document.getElementById("t1").value;
            var b=document.getElementById("t2").value;
            var c=parseInt(a)/parseInt(b);
            document.getElementById("t3").value=c;
    }
    function rem()
    {
        var a=document.getElementById("t1").value;
            var b=document.getElementById("t2").value;
            var c=parseInt(a)%parseInt(b);
            document.getElementById("t3").value=c;
    }
    function exp()
    {
        var a=document.getElementById("t1").value;
            var b=document.getElementById("t2").value;
            var c=parseInt(a)**parseInt(b);
            document.getElementById("t3").value=c;
    }
