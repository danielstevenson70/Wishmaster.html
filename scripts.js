html {
  font-size: 16px;;
}

body {
    margin: 0;
    background-color: #000;
    color: white;
    font-family: Arial, Helvetica, sans-serif
}

form {          
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
}

input[type="text"] {
    padding: 10px;
    border: 2px solid crimson;
    border-radius: 5px;
    background-color: #000;
    color: white;
    font-size: 1.2em;
}

.wishMaster {
    text-align: left;
    background: rgba(0, 0, 0, 0.6);
    padding: 45px;
    border-radius: 60px;
    color: white;
}
        
.opal {
    width: 600px;
    max-width: 90%;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: block;
    margin: 30px auto;
}

.opal:hover {
    transform: scale(0.90);
    box-shadow: 0 0 30px crimson;
}

.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease;
    z-index: 1000;
}

.popup-overlay.show {
    opacity: 1;
    pointer-events: auto;
}

.popup-image {
    max-width: 90%;
    max-height: 60vh;
    border-radius: 10px;
    margin-bottom: 20px;
}

.popup-text {
    color: crimson;
    font-size: 1.3em;
    text-align: center;
    max-width: 90%;
}

.close-btn {
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 2em;
    color: white;
    cursor: pointer;
}

.close-btn:hover {
    color: rgba(220, 20, 60, 0.526);
}

.wishCount {
    font-size: 1.5em;
    color: crimson;
    margin-top: 20px;
    text-align: center;
}

#wishList {
    list-style: none;
    padding: 0;
    margin-top: 20px;
    color: white;
}

#wishList {
    margin: 5px 0;
    font-size: italic;
    color: white;
}
