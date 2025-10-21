import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return<>
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Welcome to Taskify!</h1>
      <p className="text-center text-lg text-muted-foreground">
        Your personal task management app to boost productivity and stay organized.
      </p>
      <div className="flex gap-2">
        <Link to="sign-up">
          <Button >Get Started</Button>
        </Link>
        <Link to="sign-in">
          <Button variant="outline">Sign In</Button>
        </Link>
      </div>
    </div>  
  </>;
}
