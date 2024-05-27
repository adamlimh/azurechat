"use client";

import { AddExtension } from "@/features/extensions-page/add-extension/add-new-extension";
import { ExtensionCard } from "@/features/extensions-page/extension-card/extension-card";
import { ExtensionModel } from "@/features/extensions-page/extension-services/models";
import { PersonaCard } from "@/features/persona-page/persona-card/persona-card";
import { PersonaModel } from "@/features/persona-page/persona-services/models";
import { AI_DESCRIPTION, AI_NAME } from "@/features/theme/theme-config";
import { Hero } from "@/features/ui/hero";
import { ScrollArea } from "@/features/ui/scroll-area";
import Image from "next/image";
import { FC, useState } from "react";
import { LoadingIndicator } from "@/features/ui/loading";
import { MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import { CreateChatThread  } from "../chat-page/chat-services/chat-thread-service";
import { RedirectToChatThread } from "@/features/common/navigation-helpers";

interface ChatPersonaProps {
  personas: PersonaModel[];
  extensions: ExtensionModel[];
}

export const ChatHome: FC<ChatPersonaProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <ScrollArea className="flex-1">
      <main className="flex flex-1 flex-col gap-6 pb-6">
        <Hero
          title={
            <>
              <Image
                src={"/ai-icon.png"}
                width={60}
                height={60}
                quality={100}
                alt="ai-icon"
              />{" "}
              {AI_NAME}
            </>
          }
          description={
            <>
              <p>{AI_DESCRIPTION}</p>
              <Button className="mt-4 flex gap-3"
              onClick={async () => {
                setIsLoading(true);
                const response  = await CreateChatThread();
                if (response.status === "OK") {
                  RedirectToChatThread(response.response.id);
                }
              }}
            >
                {isLoading ? (
                <LoadingIndicator isLoading={isLoading} />
              ) : (<MessageCircle size={18} />)}
                Start chat
              </Button>
            </>
          }
        ></Hero>
        <div className="container max-w-4xl flex gap-20 flex-col">
          <div>
            <h2 className="text-2xl font-bold mb-3">Extensions</h2>

            {props.extensions && props.extensions.length > 0 ? (
              <div className="grid grid-cols-3 gap-3">
                {props.extensions.map((extension) => {
                  return (
                    <ExtensionCard
                      extension={extension}
                      key={extension.id}
                      showContextMenu={false}
                    />
                  );
                })}
              </div>
            ) :
              <p className="text-muted-foreground max-w-xl">No extentions created</p>
            }

          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">Personas</h2>

            {props.personas && props.personas.length > 0 ? (
              <div className="grid grid-cols-3 gap-3">
                {props.personas.map((persona) => {
                  return (
                    <PersonaCard
                      persona={persona}
                      key={persona.id}
                      showContextMenu={false}
                    />
                  );
                })}
              </div>
            ) :
              <p className="text-muted-foreground max-w-xl">No personas created</p>
            }
          </div>
        </div>
        <AddExtension />
      </main>
    </ScrollArea>
  );
};
