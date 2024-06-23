import Image from "next/image";

export default function Home() {
  return (
    <div id="homescreen" className="flex min-h-screen min-w-screen items-center justify-between p-24 max-sm:p-1">
      <div id="medhome" className="hidden px-5 max-sm:flex flex-col">
        <h1 className="text-xl font-bold">
            ALEXIS ECHANO
        </h1>
    
          <p className="text-lg leading-10 font-serif mt-10">
            👋🏼 Hi there! I'm currently a Product Manager at <a href="https://www.paloaltonetworks.com/" className="underline hover:text-gray-500">Palo Alto Networks</a>. Previously, I was a software engineer at <a href="https://www.meta.com/" className="underline hover:text-gray-500">Meta</a>, an early builder at multiple startups, a fellow at <a href="https://www.pear.vc/" className="underline hover:text-gray-500">PearVC</a>, and a CS undergraduate at <a href="https://www.cs.stanford.edu/" className="underline hover:text-gray-500">Stanford</a>.
          </p>
          <Image 
            src="/nextjs-github-pages/pic.jpg" 
            alt="Alexis Echano Profile Picture" 
            width={'150'}
            height={'0'}
            className="h-auto rounded-xl mx-auto mt-5"/>

        <div id="rowofbuttons" className="flex flex-row gap-2 items-center mt-10">
            <a id="linkedin" className="text-md text-center bg-button-gray hover:bg-hov-button-gray basis-1/4 px-4 py-1 rounded-lg" href="https://www.linkedin.com/in/aechano/">
              Linkedin
            </a>
            <a id="resume" className="text-md text-center bg-button-gray hover:bg-hov-button-gray basis-1/4 px-4 py-1 rounded-lg" href="/resume.pdf">
              Resume
            </a>
            <a id="github" className="text-md text-center bg-button-gray hover:bg-hov-button-gray basis-1/4 px-4 py-1 rounded-lg" href="https://github.com/alexisechano">
              Github
            </a>
            <a id="email" className="text-md text-center bg-button-gray hover:bg-hov-button-gray basis-1/4 px-4 py-1 rounded-lg" href="mailto:alexis.echano@gmail.com">
              Email
            </a>
          </div>
      </div>

      <div id="medhome" className="hidden max-md:flex flex-col max-sm:hidden">
        <h1 className="text-4xl font-bold">
            ALEXIS ECHANO
        </h1>

        <div className="flex columns-2 justify-center items-center">
          <p className="text-2xl leading-10 font-serif mt-10 break-inside-avoid-column mr-1">
            👋🏼 Hi there! I'm currently a Product Manager at <a href="https://www.paloaltonetworks.com/" className="underline hover:text-gray-500">Palo Alto Networks</a>. Previously, I was a software engineer at <a href="https://www.meta.com/" className="underline hover:text-gray-500">Meta</a>, an early builder at multiple startups, a fellow at <a href="https://www.pear.vc/" className="underline hover:text-gray-500">PearVC</a>, and a CS undergraduate at <a href="https://www.cs.stanford.edu/" className="underline hover:text-gray-500">Stanford</a>.
          </p>
          <Image 
            src="/pic.jpg" 
            alt="Alexis Echano Profile Picture" 
            width={'200'}
            height={'0'}
            className="h-auto rounded-xl break-inside-avoid-column ml-8"/>
        </div>

        <div id="rowofbuttons" className="flex flex-row gap-5 items-center mt-10">
            <a id="linkedin" className="text-lg text-center bg-button-gray hover:bg-hov-button-gray basis-1/4 px-4 py-1 rounded-lg" href="https://www.linkedin.com/in/aechano/">
              Linkedin
            </a>
            <a id="resume" className="text-lg text-center bg-button-gray hover:bg-hov-button-gray basis-1/4 px-4 py-1 rounded-lg" href="/resume.pdf">
              Resume
            </a>
            <a id="github" className="text-lg text-center bg-button-gray hover:bg-hov-button-gray basis-1/4 px-4 py-1 rounded-lg" href="https://github.com/alexisechano">
              Github
            </a>
            <a id="email" className="text-lg text-center bg-button-gray hover:bg-hov-button-gray basis-1/4 px-4 py-1 rounded-lg" href="mailto:alexis.echano@gmail.com">
              Email
            </a>
          </div>
      </div>

      <div className="columns-2 gap-10 mx-10 items-center max-md:hidden max-sm:hidden">
        <div id="textitems" className="break-inside-avoid-column pl-16 space-y-10 w-full">
          <h1 className="text-4xl font-bold">
            ALEXIS ECHANO
          </h1>

          <p className="text-2xl leading-10 font-serif">
          👋🏼 Hi there! I'm currently a Product Manager at <a href="https://www.paloaltonetworks.com/" className="underline hover:text-gray-500">Palo Alto Networks</a>. Previously, I was a software engineer at <a href="https://www.meta.com/" className="underline hover:text-gray-500">Meta</a>, an early builder at multiple startups, a fellow at <a href="https://www.pear.vc/" className="underline hover:text-gray-500">PearVC</a>, and a CS undergraduate at <a href="https://www.cs.stanford.edu/" className="underline hover:text-gray-500">Stanford</a>.
          </p>

          <div id="rowofbuttons" className="flex flex-row gap-10 items-center">
            <a id="linkedin" className="text-lg text-center bg-button-gray hover:bg-hov-button-gray basis-1/4 px-4 py-1 rounded-lg" href="https://www.linkedin.com/in/aechano/">
              Linkedin
            </a>
            <a id="resume" className="text-lg text-center bg-button-gray hover:bg-hov-button-gray basis-1/4 px-4 py-1 rounded-lg" href="/resume.pdf">
              Resume
            </a>
            <a id="github" className="text-lg text-center bg-button-gray hover:bg-hov-button-gray basis-1/4 px-4 py-1 rounded-lg" href="https://github.com/alexisechano">
              Github
            </a>
            <a id="email" className="text-lg text-center bg-button-gray hover:bg-hov-button-gray basis-1/4 px-4 py-1 rounded-lg" href="mailto:alexis.echano@gmail.com">
              Email
            </a>
          </div>
        </div>


        <div id="photothings" className="flex break-inside-avoid-column pr-10 ml-10 w-fullw-full">
          <Image 
          src="/pic.jpg" 
          alt="Alexis Echano Profile Picture" 
          width={'325'}
          height={'0'}
          className="h-auto ml-20 rounded-xl"/>
        </div>
      </div>
    </div>
  );
}
