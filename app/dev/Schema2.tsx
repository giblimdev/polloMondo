"use client";

import React, { useMemo } from "react";
import { FileText } from "lucide-react";

// shadcn.io CodeBlock (Shiki)
import type { BundledLanguage } from "@/components/ui/shadcn-io/code-block";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
} from "@/components/ui/shadcn-io/code-block";

type PrismaBlock =
  | { kind: "header"; title: string; code: string }
  | { kind: "model"; title: string; modelName: string; code: string };

function splitPrismaSchema(schemaText: string): PrismaBlock[] {
  const text = schemaText.replace(/\r\n/g, "\n").trim();

  // capture "model Name { ... }" (multiline, closing brace at line start)
  const modelRegex = /^model\s+([A-Za-z][A-Za-z0-9_]*)\s*\{[\s\S]*?^\}/gm;

  const matches: Array<{
    name: string;
    start: number;
    end: number;
    code: string;
  }> = [];

  let m: RegExpExecArray | null;
  while ((m = modelRegex.exec(text)) !== null) {
    const full = m[0];
    matches.push({
      name: m[1],
      start: m.index,
      end: m.index + full.length,
      code: full.trim(),
    });
  }

  const blocks: PrismaBlock[] = [];

  // header = everything before first model (generator/datasource/etc.)
  const firstStart = matches.length ? matches[0].start : text.length;
  const header = text.slice(0, firstStart).trim();
  if (header) {
    blocks.push({
      kind: "header",
      title: "Schema header (generator/datasource)",
      code: header,
    });
  }

  // one block per model
  for (const mm of matches) {
    blocks.push({
      kind: "model",
      title: `model ${mm.name}`,
      modelName: mm.name,
      code: mm.code,
    });
  }

  // fallback: if no models matched, show all as header
  if (!blocks.length) {
    blocks.push({
      kind: "header",
      title: "schema.prisma",
      code: text,
    });
  }

  return blocks;
}

function ModelCard({ title, code }: { title: string; code: string }) {
  const data = useMemo(
    () => [
      {
        // IMPORTANT: CodeBlock uses "language" as the internal selected value + copy source. [page:0]
        language: title, // unique value per card
        filename: `${title}.prisma`,
        code,
      },
    ],
    [title, code]
  );

  return (
    <div className="border rounded-lg overflow-hidden bg-card">
      <div className="px-4 py-3 border-b flex items-center gap-2">
        <FileText size={16} className="text-muted-foreground" />
        <div className="font-semibold text-sm">{title}</div>
      </div>

      <div className="p-3">
        <CodeBlock data={data} defaultValue={data[0].language}>
          <CodeBlockHeader>
            <CodeBlockFiles>
              {(item) => (
                <CodeBlockFilename key={item.language} value={item.language}>
                  {item.filename}
                </CodeBlockFilename>
              )}
            </CodeBlockFiles>
            <CodeBlockCopyButton />
          </CodeBlockHeader>

          <CodeBlockBody>
            {(item) => (
              <CodeBlockItem key={item.language} value={item.language}>
                {/* keep real highlighting language = prisma */}
                <CodeBlockContent language={"prisma" as BundledLanguage}>
                  {item.code}
                </CodeBlockContent>
              </CodeBlockItem>
            )}
          </CodeBlockBody>
        </CodeBlock>
      </div>
    </div>
  );
}

export default function Svhema2() {
  const prismaSchema = `

generator client {
  provider = "prisma-client"
  output   = "../lib/generated/prisma"
}

datasource db {
  provider = "postgresql"
}

////////////////////////////
/////  Modèles Auth   //////
////////////////////////////
model User {
  id            String   @id @default(cuid())
  name          String
  email         String   @unique
  emailVerified Boolean  @default(false)
  image         String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  // Auth relations
  sessions Session[]
  accounts Account[]

  // Business relations
  ownedTeams Team[]     @relation("TeamOwner")
  userTeams  UserTeam[]

  createdItems       Item[]       @relation("ItemCreator")
  createdEquipements Equipement[] @relation("EquipementCreator")
  createdLots        Lot[]        @relation("LotCreator")

  createdCalendarEvents CalendarEvent[] @relation("CalendarEventCreator")

  @@map("users")
}

model Session {
  id        String   @id @default(cuid())
  userId    String
  token     String   @unique
  expiresAt DateTime
  ipAddress String?
  userAgent String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([token])
  @@index([userId])
  @@map("sessions")
}

model Account {
  id         String @id @default(cuid())
  accountId  String
  providerId String
  userId     String

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  accessToken           String?
  refreshToken          String?
  idToken               String?
  accessTokenExpiresAt  DateTime?
  refreshTokenExpiresAt DateTime?
  scope                 String?
  password              String?
  createdAt             DateTime  @default(now())
  updatedAt             DateTime  @updatedAt

  @@unique([providerId, accountId])
  @@index([userId])
  @@map("accounts")
}

model Verification {
  id         String   @id @default(cuid())
  identifier String
  value      String
  expiresAt  DateTime
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  @@index([identifier, value])
  @@map("verifications")
}

//////////////////
/////   Dev  /////
//////////////////
model Item {
  id          String  @id @default(cuid())
  order       Int     @default(0)
  TypeItem    String  @default("") // Epic | feature/ us | Task | Model| Champs|
  name        String
  description String?
  parentId    String?

  // Relations
  parent   Item?  @relation("ItemHierarchy", fields: [parentId], references: [id], onDelete: Cascade)
  children Item[] @relation("ItemHierarchy")

  // Metadata
  createdById String
  createdBy   User     @relation("ItemCreator", fields: [createdById], references: [id], onDelete: Cascade)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([parentId])
  @@index([createdById])
  @@map("items")
}

//////////////////////
//////   Teams   /////
//////////////////////
model Team {
  id       String  @id @default(cuid())
  order    Int     @default(0)
  name     String
  type     String  @default("TEAM") // ORGANIZATION | TEAM | FARM
  parentId String?

  // Relations
  parent    Team?      @relation("TeamHierarchy", fields: [parentId], references: [id], onDelete: Cascade)
  children  Team[]     @relation("TeamHierarchy")
  members   UserTeam[]
  batiments Batiment[]

  // 1-1 with Setting
  setting Setting?

  // Calendar
  calendarEvents CalendarEvent[]

  // Metadata
  ownerId   String
  owner     User     @relation("TeamOwner", fields: [ownerId], references: [id], onDelete: Cascade)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([parentId])
  @@index([ownerId])
  @@index([type])
  @@map("teams")
}

model UserTeam {
  id     String @id @default(cuid())
  teamId String
  userId String
  role   String @default("member") // owner|admin|member|viewer

  team Team @relation(fields: [teamId], references: [id], onDelete: Cascade)
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  joinedAt DateTime @default(now())

  @@unique([teamId, userId])
  @@index([teamId])
  @@index([userId])
  @@map("user_teams")
}

////////////////////////
//////   Farming   /////
////////////////////////
model Batiment {
  id       String @id @default(cuid())
  order    Int    @default(0)
  name     String
  surface  Float
  capacity Int
  teamId   String

  // Relations
  team        Team         @relation(fields: [teamId], references: [id], onDelete: Cascade)
  lots        Lot[]
  equipements Equipement[]

  // Metadata
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([teamId])
  @@map("batiments")
}

model Equipement {
  id                  String  @id @default(cuid())
  order               Int     @default(0)
  name                String
  description         String?
  legalNorms          String?
  maintenanceSchedule String?
  batimentId          String

  // Relations
  batiment Batiment @relation(fields: [batimentId], references: [id], onDelete: Cascade)

  // Metadata
  createdById String
  createdBy   User     @relation("EquipementCreator", fields: [createdById], references: [id], onDelete: Cascade)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([batimentId])
  @@index([createdById])
  @@map("equipements")
}

/////////////////////////////////////////
//////   Breeding plannification   /////
///////////////////////////////////////

model LifeCircle {
  id    String  @id @default(cuid())
  order Int     @default(0)
  type  String // pondeuse | chair
  phase Phase[] //Démarrage, Croissance, Pré-ponte, Mise en ponte, Monté en ponte, Pic de ponte, Plateau de ponte, Fin de cycle
}

model Phase {
  id            String           @id @default(cuid())
  order         Int              @default(0)
  name          String
  weekStart     DateTime
  weekEnd       DateTime
  events        Event[] // objectif de poid, consomation de Gr, ponte
  task          Tasks[] // prophylavie, intervention
  breedingParam BreedingParams[] // reglage environement
  lifeCircleId  String
  lifeCircle    LifeCircle       @relation(fields: [lifeCircleId], references: [id], onDelete: Cascade)
}

model Event {
  id          String   @id @default(cuid())
  source      String   @default("predicted") // | observed (validation)
  order       Int      @default(0)
  name        String
  day         DateTime
  currentAge  Int // en  J
  Cheptel     Int // % restant de poule calculé dans l'app 
  weightGrams Int // Objectif de poid en Gr,
  feedAmount  Json //Alimtype et FeedQuantity
  nbEggs      Int // ex ; 0.88 
  nbeggS      Int // en % pourcalcul du nombre d'oeuf dans l'app
  nbeggM      Int // en % pourcalcul du nombre d'oeuf dans l'app
  nbeggL      Int // en % pourcalcul du nombre d'oeuf dans l'app
  nbeggXL     Int // en % pourcalcul du nombre d'oeuf dans l'app

  phaseId String?
  phase   Phase?  @relation(fields: [phaseId], references: [id])

  lots Lot[]
}

model Tasks {
  id         String   @id @default(cuid())
  source     String   @default("predicted") // | observed (validation)
  order      Int      @default(0)
  name       String
  day        DateTime
  currentAge Int // en  J
  taskList   String[]

  phaseId String?
  phase   Phase?  @relation(fields: [phaseId], references: [id])

  lots Lot[]
}

model BreedingParams {
  id     String @id @default(cuid())
  source String @default("predicted") // | observed (validation)

  order          Int      @default(0)
  day            DateTime
  currentAge     Int // en  J
  temperature    String // °C
  humidity       String // 40%,
  lightHours     String // 15 h,
  lightIntensity String // 25 mix,
  phase          Phase?   @relation(fields: [phaseId], references: [id])
  phaseId        String?

  lots Lot[]
}

///////////////////////
/////   Breeding   ////
///////////////////////

model Lot {
  id             String           @id @default(cuid())
  order          Int              @default(0)
  name           String
  status         String           @default("ACTIVE")
  startDate      DateTime         @default(now())
  actualEndDate  DateTime?
  plannedEndDate DateTime?
  initialChicks  Int
  initialAge     Int
  batimentId     String
  batiment       Batiment         @relation(fields: [batimentId], references: [id], onDelete: Cascade)
  events         Event[] // objectif de poid, consomation de Gr, ponte
  task           Tasks[] // prophylavie, intervention
  breedingParam  BreedingParams[] // reglage environement
  // 1 Lot -> N LotEvent

  // Metadata
  createdById String
  createdBy   User     @relation("LotCreator", fields: [createdById], references: [id], onDelete: Cascade)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([batimentId])
  @@index([status])
  @@index([startDate])
  @@map("lots")
}

///////////////////////
/////   Setting   /////
///////////////////////
model Setting {
  id     String @id @default(cuid())
  teamId String @unique

  team Team @relation(fields: [teamId], references: [id], onDelete: Cascade)

  // Coûts d'alimentation (par kg)
  costAlimStarter Float
  costAlimGrower  Float
  costAlimPreLay  Float
  costAlimLayer   Float

  // Prix de vente des œufs (par œuf)
  salePriceEggS  Float
  salePriceEggM  Float
  salePriceEggL  Float
  salePriceEggXL Float

  // Prix de vente des poules (par kg)
  salePriceLayKg    Float
  salePriceBoilerKg Float

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("settings")
}

//////////////////////////
/////   Calendrier   /////
//////////////////////////
model CalendarEvent {
  id          String    @id @default(cuid())
  title       String
  description String?
  startDate   DateTime
  endDate     DateTime?
  teamId      String

  // Relations
  team Team @relation(fields: [teamId], references: [id], onDelete: Cascade)

  // Metadata
  createdById String
  createdBy   User     @relation("CalendarEventCreator", fields: [createdById], references: [id], onDelete: Cascade)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([teamId])
  @@index([startDate])
  @@index([createdById])
  @@map("events")
}
`;

  const blocks = useMemo(() => splitPrismaSchema(prismaSchema), [prismaSchema]);

  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-4 bg-muted/30">
        <div className="font-semibold">
          {blocks.filter((b) => b.kind === "model").length} models détectés
        </div>
        <div className="text-sm text-muted-foreground">
          Un bloc par model (avec highlight + bouton copier).
        </div>
      </div>

      {/* Grid: one card per block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {blocks.map((b) => (
          <ModelCard
            key={`${b.kind}:${b.title}`}
            title={b.title}
            code={b.code}
          />
        ))}
      </div>
    </div>
  );
}
