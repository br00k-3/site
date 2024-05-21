import Link from "next/link"

export default function resume() {
  return (
    <div className="w-full flex-col overflow-x-hidden">
      <div className=" lg:mx-56 2xl:mx-96 mx-4">
        <div className="text-center">
          <p>
            PDF copy can be found{" "}
            <Link href="/resume.pdf" className="text-zinc-400 underline">
              Here
            </Link>
          </p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">Brooke Milberg</p>
          <p className=""> Portland OR</p>
          <p className="">rheamilberg@gmail.com</p>
        </div>
        <div className="text-left mt-5">
          <p className="text-2xl font-semibold">Education</p>
          <p className="text-xl font-semibold">
            High School Diploma, Lincoln High School
          </p>
          <p className="text-l font-semibold">
            Portland OR, Expected Graduation June 2027
          </p>
          <p className="">
            Highlights of coursework: Lengua y Literatura 5-6, Beginning Audio
            Engineering
          </p>
        </div>
        <div className="text-left mt-5">
          <p className="text-2xl font-semibold">Leadership and Activities</p>
          <div>
            <p className="text-xl font-semibold">Run Crew</p>
            <div className="pl-5">
              <p className="text-l font-semibold">
                Lincoln High School Flock Party, 2024
              </p>
              <ul className="list-disc pl-5">
                <li>Set up the band and mics</li>
                <li>Use the Fly System</li>
                <li>Strike after show</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold">Sound Tech</p>
            <div className="pl-5">
              <p className="text-l font-semibold">
                Portland Panto Players, January 2024
              </p>
              <ul className="list-disc pl-5">
                <li>Assist in show sound design</li>
                <li>Mix FOH and monitors during shows</li>
                <li>Assist actors with mics</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold">Run Crew/Mic Tech</p>
            <div className="pl-5">
              <p className="text-l font-semibold">
                Lincoln High School Popcycles, 2023
              </p>
              <ul className="list-disc pl-5">
                <li>Assist FOH mixer with setup and striking</li>
                <li>Backstage run crew during the show</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold">
              Volunteer and Student Exchange
            </p>
            <div className="pl-5">
              <p className="text-l font-semibold">
                Northwest International Exchange, June-July 2023
              </p>
              <ul className="list-disc pl-5">
                <li>Lived in Costa Rica and attended ELEC (Spanish School)</li>
                <li>Volunteered with trash clean up and community service</li>
                <li>Received certificate of completion</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-left mt-5">
          <p className="text-2xl font-semibold">Skills and Attributes</p>
          <div className="pl-5">
            <ul className="list-disc pl-5">
              <li>Fluent in Spanish</li>
              <li>
                Intermediate to advanced level understanding of Java,
                Javascript, HTML, CSS, Python, PHP, C++
              </li>
              <li>Eager to learn more in all fields</li>
              <li>Knowledge of Ableton Live, Studio One, and Pro Tools</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}