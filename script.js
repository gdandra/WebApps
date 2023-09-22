function CalcFibonacci(){
    const n = parseInt(document.getElementById("Fibo-input").value);
    if(!isNaN(n) && n >= 0){
        const result = fibonacci(n);
        document.getElementById("Fibo-result").textContent = result;
    }
    else{
        alert("Input a positive number!");
    }
}

function fibonacci(n){
    if(n <= 1){
        return n;
    }

    let prevfibo = 0;
    let currentfibo = 1;

    for (let i = 2; i <= n; i++){
        const temp = currentfibo;
        currentfibo += prevfibo;
        prevfibo = temp; 
    }
    return currentfibo;
}


document.getElementById("Shape-option").addEventListener("change", function(){  
    var option = this.value;

    switch(option){
        case "Cube":
            document.getElementById("cube-calc").style.display = "block";
            document.getElementById("sphere-calc").style.display = "none";
            document.getElementById("prism-calc").style.display = "none";
            document.getElementById("cuboid-calc").style.display = "none";
            break;
        case "Sphere":
            document.getElementById("cube-calc").style.display = "none";
            document.getElementById("sphere-calc").style.display = "block";
            document.getElementById("prism-calc").style.display = "none";
            document.getElementById("cuboid-calc").style.display = "none";
            break;
        case "Prism":
            document.getElementById("cube-calc").style.display = "none";
            document.getElementById("sphere-calc").style.display = "none";
            document.getElementById("prism-calc").style.display = "block";
            document.getElementById("cuboid-calc").style.display = "none";
            break;
        case "Cuboid":
            document.getElementById("cube-calc").style.display = "none";
            document.getElementById("sphere-calc").style.display = "none";
            document.getElementById("prism-calc").style.display = "none";
            document.getElementById("cuboid-calc").style.display = "block";
            break;
        // default:
        //     document.getElementById("cube-calc").style.display = "block";
        //     document.getElementById("sphere-calc").style.display = "none";
        //     document.getElementById("prism-calc").style.display = "none";
        //     document.getElementById("cuboid-calc").style.display = "none";
        //     break;
    }
});


function CalcVolume(){
    const CubeSide = parseFloat(document.getElementById("cube-side").value);
    const Radius = parseFloat(document.getElementById("sphere-radius").value);
    const PrismBase = parseFloat(document.getElementById("prism-base").value);
    const PrismHeight = parseFloat(document.getElementById("prism-height").value);
    const CuboidLength = parseFloat(document.getElementById("cuboid-lenght").value);
    const CuboidHeight = parseFloat(document.getElementById("cuboid-height").value);
    const CuboidWidht = parseFloat(document.getElementById("cuboid-width").value);
    const Option = document.getElementById("Shape-option").value;

    switch(Option){
        case "Cube":
            if(!isNaN(CubeSide) && CubeSide >= 0){
                const volume = CubeSide ** 3;
                // console.log(volume);
                document.getElementById("volume-result").textContent = `${volume.toFixed(2)}`;
            }else{
                alert("Input a positive Number!");
            }
            break;
        case "Sphere":
            if(!isNaN(Radius) && Radius >= 0){
                const volume = (4/3) * Math.PI * (Radius ** 3);
                document.getElementById("volume-result").textContent = `${volume.toFixed(2)}`;
            }else{
                alert("Input a positive Number!");
            }
            break;
        case "Prism":
            if(!isNaN(PrismBase) && !isNaN(PrismHeight) && PrismBase >= 0 && PrismHeight >= 0){
                const volume = (1/2 * PrismBase * PrismHeight) * PrismHeight;
                document.getElementById("volume-result").textContent = `${volume.toFixed(2)}`;
            }else{
                alert("Input a positive Number!");
            }
            break;
        case "Cuboid":
            if(!isNaN(CuboidHeight) && !isNaN(CuboidLength) && !isNaN(CuboidWidht) && CuboidHeight >= 0 && CuboidLength >= 0 && CuboidWidht >= 0){
                const volume = CuboidHeight * CuboidLength * CuboidWidht;
                document.getElementById("volume-result").textContent = `${volume.toFixed(2)}`;
            }else{
                alert("Input a positive Number!");
            }
            break;
    }
    

}