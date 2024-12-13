import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";

export const SelectDate: React.FC = () => {
  return (
    <Select>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="This Day" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Preferable Date</SelectLabel>
          <SelectItem value="apple">This Day</SelectItem>
          <SelectItem value="banana">This Week</SelectItem>
          <SelectItem value="blueberry">This Month</SelectItem>
          <SelectItem value="grapes">This Year</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}