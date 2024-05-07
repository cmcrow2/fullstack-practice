import profile from "../images/profile.jpg";

function App() {
  return (
    <div class="flex flex-col flex-1 overflow-y-auto items-center justify-center">
      <div class="flex flex-row items-center justify-center">
        <img
          src={profile}
          alt="Profile Pic"
          class="object-cover object-top h-40 w-40 rounded-full"
        />
        <div class="p-4">
          <h1 class="text-4xl font-bold">Hey! I'm Cam.</h1>
          <p class="mt-2 text-stone-600">
            I am a software engineer based in Dallas, Texas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
