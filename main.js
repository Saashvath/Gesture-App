Webcam.set({

    width:350,
    height:250,
    image_quality:'png',
    png_quality:100,
})

Webcam.attach("#camera")

function picture(){

    Webcam.snap(function (take_picture){

    document.getElementById("result").innerHTML = `<img id=camera src=${take_picture}>`
})

}

console.log("ml5.version", ml5.version)
var storage = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sQacGPFOT/model.json",modelLoaded)

function modelLoaded(){

    console.log("Model Loaded Sucessfuly!")
}


function speak(){

    var synth = window.speechSynthesis
    pre1_data = "The First Prediction Is"+pre1
    pre2_data = "And The Second Prediction Is"+pre2
    utterThis = new SpeechSynthesisUtterance(pre1_data,pre2_data)
    synth.speak(utterThis)
}

function result(){

  img = document.getElementById("camera")  
  storage.classify(img,gotresult)

}

function  gotresult(error,result){

    if(error){

        console.log(error)
    }

    else{
        console.log(result)
        document.getElementById("prediction1").innerHTML = results[0].label
        document.getElementById("prediction2").innerHTML = results[1].label


        pre1=results[0].label
        pre2=results[1].label
        speak()

        if(pre1=="This Is Looking Amazing"){


            document.getElementById("prediction1").innerHTML="👌"
        }
        if(pre1=="This Is Looking Amazing"){


            document.getElementById("prediction2").innerHTML="👌"
        }

        if(pre1=="All The Best"){


            document.getElementById("prediction1").innerHTML="👍"
        }
        if(pre2=="All The Best"){


            document.getElementById("prediction1").innerHTML="👍"
        }

        if(pre1=="That Was A Marvelous Victory"){


            document.getElementById("prediction1").innerHTML="✌"
        }
        if(pre2=="That Was A Marvelous Victory"){


            document.getElementById("prediction1").innerHTML="✌"
        }

    }
}