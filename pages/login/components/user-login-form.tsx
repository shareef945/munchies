import * as React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/pages/api/auth";
import { toast } from "react-hot-toast";
import { useToast } from "@/components/ui/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function UserLoginForm({
  className,
  ...props
}: UserAuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login(email, password),
    onSuccess: () => {
      toast({
        title: "Logged in successfully!",
        description: "Welcome home baby boys n gurls",
      });
      router.push("/dashboard");
    },
    onError: (error) => {
      toast({
        title: String(error),
        variant: "destructive",
        description: "What a shame",
      });
    },
  });

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Logging in chicos, hang tight",
    });
    mutation.mutate({ email, password });
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmission}>
        <div className="grid gap-2">
          <div className="grid gap-2">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              // disabled={mutation.isLoading}
              required
            />
            <Input
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              autoCapitalize="none"
              autoComplete="current-password"
              autoCorrect="off"
              // disabled={mutation.isLoading}
              required
            />
          </div>
          <Button type="submit">
            {/* {mutation.isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )} */}
            Sign In
          </Button>
        </div>
      </form>
      {mutation.isError && (
        <div className="text-red-500 text-sm">{String(mutation.error)}</div>
      )}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase"></div>
      </div>
    </div>
  );
}
