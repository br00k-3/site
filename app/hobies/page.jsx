import localFont from "next/font/local";

const myFont = localFont({ src: "./nintendoP_DotGothic12-M.otf" });

export default function Page() {
  return (
    <div className={myFont.className}>
      <div className="absolute z-40 left-0 top-0 w-screen h-screen">
        <div className="fixed block left-0 top-0 w-full h-screen animate-flicker pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)50%,rgba(0,0,0,0.25)50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]" />
        <div className="bg-black text-center min-h-screen w-full items-center">
          <div className="fixed block left-0 top-0 w-full h-screen bg-fuchsia-600/5"/>
          <p className="text-7xl pt-10 text-cyan-400 animate-crt">
            {" "}
            Hello World{" "}
          </p>
          <p className="text-4xl text-green-600 py-5 mx-72">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam
            viverra orci sagittis eu. Nulla porttitor massa id neque aliquam
            vestibulum. Sed libero enim sed faucibus turpis in. Enim facilisis
            gravida neque convallis a cras semper auctor. Cursus in hac
            habitasse platea dictumst quisque. Dictum non consectetur a erat nam
            at lectus urna. Ut sem viverra aliquet eget sit amet tellus cras.
            Diam donec adipiscing tristique risus nec feugiat. Volutpat ac
            tincidunt vitae semper quis lectus nulla at. Volutpat sed cras
            ornare arcu dui. Ante in nibh mauris cursus mattis. Quisque sagittis
            purus sit amet. Quam viverra orci sagittis eu volutpat odio
            facilisis mauris. Cursus mattis molestie a iaculis at erat
            pellentesque. Mollis nunc sed id semper risus in hendrerit gravida.
            Massa ultricies mi quis hendrerit. Porttitor rhoncus dolor purus non
            enim praesent elementum facilisis leo.
          </p>
          <p className="text-4xl text-fuchsia-600 py-5 mx-72">
            Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Id
            semper risus in hendrerit gravida rutrum. Fermentum et sollicitudin
            ac orci phasellus egestas tellus rutrum tellus. Ac feugiat sed
            lectus vestibulum mattis ullamcorper velit sed. Lorem dolor sed
            viverra ipsum nunc aliquet bibendum enim facilisis. Quis vel eros
            donec ac odio tempor orci dapibus ultrices. Bibendum ut tristique et
            egestas quis ipsum suspendisse ultrices. Velit laoreet id donec
            ultrices tincidunt arcu non sodales. Urna nec tincidunt praesent
            semper feugiat nibh sed pulvinar proin. Non arcu risus quis varius
            quam. Neque vitae tempus quam pellentesque nec nam aliquam sem.
            Aliquam ut porttitor leo a diam sollicitudin. Facilisi morbi tempus
            iaculis urna. Quis eleifend quam adipiscing vitae.
          </p>
        </div>
      </div>
    </div>
  );
}
