"use client";

import { useState, useEffect } from "react";
import TestemonialItem from "@/_components/TestemonialItem";
import { boxes, sampleTexts, TextContent } from "@/_data/testemonialData";

function Page() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [textContents, setTextContents] = useState<TextContent[]>([]);
  const [assignedTexts, setAssignedTexts] = useState<
    Record<string, TextContent>
  >({});

  const getTextSize = (
    text: Omit<TextContent, "id" | "size">
  ): "small" | "medium" | "large" => {
    const totalLength = text.highlight.length + text.description.length;
    if (totalLength < 200) return "small";
    if (totalLength < 400) return "medium";
    return "large";
  };

  useEffect(() => {
    const contents: TextContent[] = sampleTexts.map((text, index) => ({
      ...text,
      id: `text-${index}`,
      size: getTextSize(text),
    }));

    setTextContents(contents);
    assignTextsToBoxes(contents);
  }, []);

  const assignTextsToBoxes = (contents: TextContent[]) => {
    const shuffledBoxes = [...boxes].sort(() => Math.random() - 0.5);
    const shuffledTexts = [...contents].sort(() => Math.random() - 0.5);

    const assignments: Record<string, TextContent> = {};
    const usedTextIds = new Set<string>();

    const largeBoxes = shuffledBoxes.filter((box) => box.size === "large");
    const largeTexts = shuffledTexts.filter((text) => text.size === "large");

    for (let i = 0; i < Math.min(largeBoxes.length, largeTexts.length); i++) {
      assignments[largeBoxes[i].id] = largeTexts[i];
      usedTextIds.add(largeTexts[i].id);
    }

    const mediumBoxes = shuffledBoxes.filter(
      (box) => box.size === "medium" && !assignments[box.id]
    );
    const mediumTexts = shuffledTexts.filter(
      (text) => text.size === "medium" && !usedTextIds.has(text.id)
    );

    for (let i = 0; i < Math.min(mediumBoxes.length, mediumTexts.length); i++) {
      assignments[mediumBoxes[i].id] = mediumTexts[i];
      usedTextIds.add(mediumTexts[i].id);
    }

    const remainingBoxes = shuffledBoxes.filter((box) => !assignments[box.id]);
    const remainingTexts = shuffledTexts.filter(
      (text) => !usedTextIds.has(text.id)
    );

    for (
      let i = 0;
      i < Math.min(remainingBoxes.length, remainingTexts.length);
      i++
    ) {
      assignments[remainingBoxes[i].id] = remainingTexts[i];
    }

    setAssignedTexts(assignments);
  };

  return (
    <section className="container mx-auto text-white my-10 grid md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-x-4 gap-y-8 p-6">
      {boxes.map((box) => (
        <div key={box.id} className={box.className}>
          {assignedTexts[box.id] && (
            <TestemonialItem
              title={assignedTexts[box.id].title}
              subtitle={assignedTexts[box.id].subtitle}
              highlight={assignedTexts[box.id].highlight}
              description={assignedTexts[box.id].description}
              picture={assignedTexts[box.id].picture}
            />
          )}
        </div>
      ))}
    </section>
  );
}

export default Page;
