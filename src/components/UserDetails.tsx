import type { User } from "@/data/users";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Mail, Phone, User as UserIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label";

interface IProps {
  user: User;
}

const UserDetails = ({ user }: IProps) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [role, setRole] = useState(user.role);
  const [location, setLocation] = useState(user.location);
  const [department, setDepartment] = useState(user.department);

  return (
    <div className="overflow-auto relative">
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-start space-x-6 mb-4">
            <Avatar className="w-24 h-24">
              <AvatarImage
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
              />
              <AvatarFallback className="text-2xl">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h1 className="text-3xl font-bold">{user.name}</h1>
                <Badge
                  variant={user.status === "Active" ? "default" : "secondary"}
                >
                  {user.status}
                </Badge>
              </div>
              <p className="text-muted-foreground">{user.role}</p>
              <p className="text-muted-foreground">{user.department}</p>
            </div>
          </div>

          {/* Edit Information */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Edit Information</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Job Role</Label>
                  <Input
                    id="role"
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-4">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>

          {/* Bio */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserIcon className="w-5 h-5 mr-2" />
                About
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="truncate text-muted-foreground leading-relaxed">
                {user.about_1}
              </p>
              <p className="truncate text-muted-foreground leading-relaxed">
                {user.about_2}
              </p>
              <p className="truncate text-muted-foreground leading-relaxed">
                {user.about_3}
              </p>
              <p className="truncate text-muted-foreground leading-relaxed">
                {user.about_4}
              </p>
              <p className="truncate text-muted-foreground leading-relaxed">
                {user.about_5}
              </p>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex space-x-4">
            <Button>
              <Mail className="w-4 h-4 mr-2" />
              Send Message
            </Button>
            <Button variant="outline">
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
            <Button variant="outline">View Profile</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
