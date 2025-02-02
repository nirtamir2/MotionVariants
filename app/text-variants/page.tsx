"use client";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

import { AnimatePresence, motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronLeft, RefreshCcw } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BLINK_CODE,
  BLUR_CODE,
  FADE_DOWN_CODE,
  FADE_UP_CODE,
  GRADUAL_SPACING_CODE,
  MULTIDIRECTION_SLIDE_CODE,
  RIPPLE_PULL_UP_CODE,
  ROTATE_CODE,
  SEPARATE_CODE,
  SLIGHT_FLIP_CODE,
  STAGGERED_FADE_IN_CODE,
  STAGGERED_PULL_UP_CODE,
  STRIKE_THROUGH_CODE,
  TYPING_EFFECT_CODE,
  VELOCITY_CODE,
} from "@/components/code-previews/code";
import FadeDown from "@/components/variant-previews/fade-down";
import FadeUp from "@/components/variant-previews/fade-up";
import MultiDirection from "@/components/variant-previews/multi-direction";
import TextVariantsHeader from "@/components/headers/text-variants-header";
import StaggeredFade from "@/components/variant-previews/staggered-fade";
import StaggerPullUp from "@/components/variant-previews/stagger-pull-up";
import RipplePullUp from "@/components/variant-previews/ripple-pull-up";
import VelocityScroll from "@/components/variant-previews/velocity-scroll";
import RotateText from "@/components/variant-previews/rotate-text";
import TypingEffect from "@/components/variant-previews/typing-effect";
import SeparateAway from "@/components/variant-previews/separate-away";
import StrikeText from "@/components/variant-previews/strike-text";
import GradualSpacing from "@/components/variant-previews/gradual-spacing";
import Blur from "@/components/variant-previews/blur";
import BlinkingText from "@/components/variant-previews/blinking-text";
import SlightFlip from "@/components/variant-previews/slight-flip";
import WavyText from "@/components/variant-previews/wavy-text";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";

export default function Home() {
  const generateZeros = (n: number) => Array(n).fill(0);
  const [keys, setKeys] = React.useState(generateZeros(15));

  function restartAnimation(index: number) {
    setKeys((prevKeys) => {
      const newKeys = [...prevKeys]; // copy the previous keys
      newKeys[index] += 1; // increment the key at the given index
      return newKeys;
    });
  }

  let variants = [
    {
      name: "Fade Down with Stagger",
      preview: <FadeDown key={keys[0]} />,
      code: FADE_DOWN_CODE,
    },
    {
      name: "Fade Up with Stagger",
      preview: <FadeUp key={keys[1]} />,
      code: FADE_UP_CODE,
    },
    {
      name: "Multi Direction Slide",
      preview: <MultiDirection key={keys[2]} />,
      code: MULTIDIRECTION_SLIDE_CODE,
    },
    {
      name: "Staggered Fade In",
      preview: <StaggeredFade key={keys[3]} />,
      code: STAGGERED_FADE_IN_CODE,
    },
    {
      name: "Staggered Letter Pull Up",
      preview: <StaggerPullUp key={keys[4]} />,
      code: STAGGERED_PULL_UP_CODE,
    },
    {
      name: "Ripple Pull Up",
      preview: <RipplePullUp key={keys[5]} />,
      code: RIPPLE_PULL_UP_CODE,
    },
    {
      name: "Velocity Scroll",
      preview: <VelocityScroll key={keys[6]} />,
      code: VELOCITY_CODE,
    },
    {
      name: "Rotate Between Words",
      preview: <RotateText key={keys[7]} />,
      code: ROTATE_CODE,
    },
    {
      name: "Typing Effect",
      preview: <TypingEffect key={keys[8]} />,
      code: TYPING_EFFECT_CODE,
    },
    {
      name: "Separate Away",
      preview: <SeparateAway key={keys[9]} />,
      code: SEPARATE_CODE,
    },
    {
      name: "Strike Text",
      preview: <StrikeText key={keys[10]} />,
      code: STRIKE_THROUGH_CODE,
    },
    {
      name: "Gradual Spacing",
      preview: <GradualSpacing key={keys[11]} />,
      code: GRADUAL_SPACING_CODE,
    },
    {
      name: "Blur In",
      preview: <Blur key={keys[12]} />,
      code: BLUR_CODE,
    },
    {
      name: "Blinking Text",
      preview: <BlinkingText key={keys[13]} />,
      code: BLINK_CODE,
    },
    {
      name: "Slight Flip",
      preview: <SlightFlip key={keys[14]} />,
      code: SLIGHT_FLIP_CODE,
    },
    {
      name: "Wavy Text",
      preview: <WavyText key={keys[15]} />,
      code: SLIGHT_FLIP_CODE,
    },
  ];

  const [query, setQuery] = React.useState("");

  const filteredVariants =
    query === ""
      ? variants
      : variants.filter((variant) => {
          return variant.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div>
      <TextVariantsHeader setQuery={setQuery} />

      <div className="flex flex-col items-center min-h-screen py-2 space-y-6">
        {/* {variants.map((variant, index) => ( */}
        {filteredVariants.length > 0 ? (
          filteredVariants.map((variant, index) => (
            <Tabs defaultValue="preview" className="w-11/12" key={index}>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                <div className="flex justify-between w-full mb-2 lg:mb-0">
                  <h1 className="text-xl">{variant.name}</h1>

                  <Button
                    onClick={() => restartAnimation(index)}
                    variant="ghost"
                    className="lg:hidden"
                  >
                    <RefreshCcw size={24} />
                  </Button>
                </div>
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-6">
                  <TabsList className="grid w-[355px] lg:w-[400px] grid-cols-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                  </TabsList>

                  <div className="hidden lg:flex space-x-6">
                    <Separator orientation="vertical" />

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            onClick={() => restartAnimation(index)}
                            variant="ghost"
                          >
                            <RefreshCcw size={24} />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="mr-8">
                          <p>Restart animation</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>

              <TabsContent value="preview">
                <Card className="bg-background">
                  <CardContent className="bg-background text-primary space-y-2 mt-4">
                    {variant.preview}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="code">
                <Card className="bg-background">
                  <CardContent className="space-y-2">
                    <ScrollArea className="h-96">
                      <pre className="text-sm font-mono">
                        <code className="language-jsx text-primary">
                          {variant.code}
                        </code>
                      </pre>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          ))
        ) : (
          // <h1 className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]">
          //   No results found.
          //   <br />
          //   Try another search.
          // </h1>
          <motion.div
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.h1
              className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              No results found.
            </motion.h1>
            <motion.h1
              className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Try another search!
            </motion.h1>
            <motion.div
              className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              <Button
                onClick={() => {
                  setQuery("");
                }}
                variant="ghost"
              >
                <ChevronLeft size={24} className="mr-2" />{" "}
                <span className="text-xl">Back to Text Variants</span>
              </Button>
            </motion.div>
          </motion.div>
        )}

        <h1 className="text-2xl">More coming soon...</h1>
      </div>
    </div>
  );
}
