import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const AccordionLayout = ({ question, answer, value }) => {
  return (
    <div>
      <Accordion className="border rounded-[20px] px-[20px] py-[5px] mb-3 bg-light-bg" type="single" collapsible>
        <AccordionItem value={value}>
          <AccordionTrigger className="text-[18px] font-[600] ">{question}</AccordionTrigger>
          <AccordionContent className="text-[15px] font-[400] ">{answer}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionLayout
