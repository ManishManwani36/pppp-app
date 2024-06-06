import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NavigationLinks } from "@/constants/navigation";
import Link from "next/link";

export default function FeaturePage({
  params,
}: {
  params: { feature: string };
}) {
  const navFeature = NavigationLinks.find(
    (link) => link.route === `/${params.feature}`
  );

  if (!navFeature) {
    return <h1>Feature not found</h1>;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center justify-start">
          <navFeature.icon />
          {navFeature.name}
        </CardTitle>
        <p className="text-muted-foreground">Feature coming soon</p>
      </CardHeader>
      <CardContent>
        <p>{navFeature.desc}</p>
      </CardContent>
      <CardFooter>
        <Link href="/">
          <Button>Back to home</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
