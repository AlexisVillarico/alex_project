function Body() {
  return (
    <div class="bg-[url('images/bg.jpg')] bg-cover h-90">
        <h3 className="font-bold text-center pb-5 pt-4 w-4 text-9xl text-white">CINEMA <span className="text-red-500">PREMIER</span></h3>   
        <h1 className="text-white font-bold pl-10 text-3xl pb-2">High Quality Movies</h1>
        <p className="text-white pl-3">"Welcome to our website!, your ultimate destination to stream movies for free!<br></br>
          With a vast library of the latest blockbusters, timeless classics, and hidden gems,<br></br>
          we offer high-quality streaming without any subscription fees.<br></br>
          Browse through a wide range of genres, from action to romance, and enjoy seamless viewing on any device. <br></br> 
          Just click, watch, and enjoy your favorite films at your convenience!"</p>
          <br></br>
          <br></br>
          <div class="flex justify-start pl-10 gap-10">
             <button class="bg-blue-600 text-white font-semibold py-2 px-4">Watch Now!</button>
             <button class="bg-red-500 text-white font-semibold py-2 px-4">DOWNLOAD</button>
          </div>
          <br></br>
          
    </div>

  )
}

export default Body