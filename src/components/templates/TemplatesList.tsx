
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, GraduationCap } from "lucide-react";
import { TemplateCard } from "@/components/TemplateCard";
import { templates } from "@/data/templates";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export const TemplatesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  // Extract all unique technologies from templates
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    templates.forEach(template => {
      template.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter templates based on search term and filters
  const filteredTemplates = useMemo(() => {
    return templates.filter(template => {
      // Search filter
      const matchesSearch = searchTerm === "" || 
        template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Difficulty filter
      const matchesDifficulty = !difficultyFilter || template.difficulty === difficultyFilter;
      
      // Technology filter
      const matchesTechnology = selectedTechnologies.length === 0 || 
        selectedTechnologies.some(tech => template.technologies.includes(tech));
      
      return matchesSearch && matchesDifficulty && matchesTechnology;
    });
  }, [searchTerm, difficultyFilter, selectedTechnologies]);

  // Toggle technology selection
  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech) 
        : [...prev, tech]
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setDifficultyFilter(null);
    setSelectedTechnologies([]);
  };

  return (
    <div className="space-y-8">
      {/* Search and filter bar */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Input
            placeholder="テンプレートを検索..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        </div>
        
        <div className="flex justify-between items-center">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            フィルター
          </Button>
          
          {(difficultyFilter || selectedTechnologies.length > 0) && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={resetFilters}
              className="text-sm"
            >
              フィルターをリセット
            </Button>
          )}
        </div>

        <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
          <CollapsibleContent className="space-y-4 py-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">難易度</span>
              </div>
              <Select
                value={difficultyFilter || ""}
                onValueChange={(value) => setDifficultyFilter(value || null)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="すべての難易度" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">すべての難易度</SelectItem>
                  <SelectItem value="初級">初級</SelectItem>
                  <SelectItem value="中級">中級</SelectItem>
                  <SelectItem value="上級">上級</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 18 22 12 16 6"></path>
                  <path d="M8 6 2 12 8 18"></path>
                </svg>
                <span className="text-sm font-medium">技術</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {allTechnologies.map((tech) => (
                  <div key={tech} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`tech-${tech}`} 
                      checked={selectedTechnologies.includes(tech)}
                      onCheckedChange={() => toggleTechnology(tech)}
                    />
                    <label
                      htmlFor={`tech-${tech}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {tech}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Display filtered templates count */}
      <div className="text-sm text-muted-foreground">
        {filteredTemplates.length} 件のテンプレートが見つかりました
      </div>

      {/* Templates grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((template, index) => (
            <TemplateCard key={template.title} {...template} index={index} />
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-muted-foreground">
            テンプレートが見つかりませんでした。フィルターをリセットして再試行してください。
          </div>
        )}
      </div>
    </div>
  );
};
