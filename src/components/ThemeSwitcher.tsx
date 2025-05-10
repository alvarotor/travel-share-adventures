
import React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface ThemeSwitcherProps {
  variant?: "icon" | "switch";
  className?: string;
}

const ThemeSwitcher = ({ variant = "icon", className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  if (variant === "switch") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <Sun className="h-4 w-4 text-muted-foreground" />
        <Switch 
          checked={isDark}
          onCheckedChange={toggleTheme}
          aria-label="Toggle theme"
        />
        <Moon className="h-4 w-4 text-muted-foreground" />
      </div>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={className}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-blue-900" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
