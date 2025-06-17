import { Card, CardContent } from "@/components/ui/card.tsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import type { User } from "@/data/users.ts";

interface IProps {
  user: User;
}

const UserListItem = ({ user }: IProps) => {
  return (
    <Card className="relative py-0 cursor-pointer transition-all overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
            />
            <AvatarFallback>
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0 flex items-center space-x-2 justify-between">
            <div>
              <p className="text-sm font-medium text-foreground truncate">
                {user.name}
              </p>
              <p className="text-sm text-muted-foreground truncate">
                {user.role}
              </p>
            </div>

            <Badge variant="outline">{user.projects}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserListItem;
