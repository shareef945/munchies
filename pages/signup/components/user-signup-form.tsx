import * as React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserSignupForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [msisdn, setMsisdn] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  // const supabase = createClientComponentClient();

  async function onSubmit(event: React.SyntheticEvent) {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    } else {
      event.preventDefault();
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      // let { data, error } = await supabase.auth.signUp({
      //   email: email,
      //   password: password,
      // });
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="password"
              placeholder="Password"
              type="password"
              disabled={isLoading}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              id="confirm-password"
              placeholder="Confirm Password"
              type="password"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}
