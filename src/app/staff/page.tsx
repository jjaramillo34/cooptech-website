import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui"
import { Mail } from "lucide-react"

export default function StaffPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">Staff Directory</h1>
        <p className="text-muted-foreground italic">Select any name below for contact information</p>
      </div>

      {/* Administration Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Administration</h2>
        <Separator className="mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <StaffMember name="Benstraum, Sarah" title="Assistant Principal" email="sbenstraum@schools.nyc.gov" />
              <StaffMember name="Crowe, Alrick" title="Assistant Principal" email="acrowe@schools.nyc.gov" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <StaffMember name="Gathers, Victor" title="Assistant Principal" email="vgather@schools.nyc.gov" />
              <StaffMember name="Peterson, Carolyn" title="Assistant Principal" email="cpeters12@schools.nyc.gov" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <StaffMember name="Gumbs, DeLaina" title="School Business Manager" email="dgumbs4@schools.nyc.gov" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Faculty</h2>
        <Separator className="mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <StaffMember name="Ackil, Michael" title="Special Education" email="mackil@schools.nyc.gov" />
              <StaffMember name="Barry, Amadou" title="Welding" email="abarry4@schools.nyc.gov" />
              <StaffMember name="Blake, Wilton" title="Electrical" email="wblake7@schools.nyc.gov" />
              <StaffMember name="Cintron, Robert" title="Electrical" email="rcintro3@schools.nyc.gov" />
              <StaffMember name="Clark, Michelle" title="Natural Hairstyling" email="mclark47@schools.nyc.gov" />
              <StaffMember name="DeJesus, Diana" title="Special Education" email="ddejesu2@schools.nyc.gov" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <StaffMember name="Devitt, Marc" title="Plumbing" email="mdevitt@schools.nyc.gov" />
              <StaffMember name="Ferguson, Cherry Ann" title="Work Based Learning Coordinator" email="cfergus3@schools.nyc.gov" />
              <StaffMember name="Fernandez, Fred" title="Carpentry" email="ffernan6@schools.nyc.gov" />
              <StaffMember name="Fiorica, Emma" title="Medical Health Careers" email="efiorica@schools.nyc.gov" />
              <StaffMember name="Forstein, Jonathan" title="Audio & Video Production" email="jforstein@schools.nyc.gov" />
              <StaffMember name="Gaffney, Matt" title="Basic Carpentry" email="mgaffney6@schools.nyc.gov" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <StaffMember name="Garcia, Julio" title="Intro to Construction" email="jgarcia95@schools.nyc.gov" />
              <StaffMember name="Gauntlett, Greg" title="Welding" email="ggaunlett2@schools.nyc.gov" />
              <StaffMember name="Golden, Tarik" title="Barbering" email="tgolden@schools.nyc.gov" />
              <StaffMember name="Gomez, James" title="Barbering" email="jgomez7@schools.nyc.gov" />
              <StaffMember name="Gomez, Tisha" title="Vision Technology" email="tgomez3@schools.nyc.gov" />
              <StaffMember name="Greenberg, Jonathan" title="Culinary" email="jgreenberg16@schools.nyc.gov" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Guidance Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Guidance</h2>
        <Separator className="mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <StaffMember name="Dayton, Lynne" title="Guidance Counselor" email="ldayton@schools.nyc.gov" />
              <StaffMember name="Delgado, Diane" title="Social Worker" email="ddelgado5@schools.nyc.gov" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <StaffMember name="Jacques, Francine" title="Guidance Counselor" email="fjacques@schools.nyc.gov" />
              <StaffMember name="Mondschein, Aimee" title="Guidance Counselor" email="amondschein@schools.nyc.gov" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <StaffMember name="Morales, Luis" title="Social Worker" email="lmorales24@schools.nyc.gov" />
              <StaffMember name="Romano, Iris" title="Guidance Counselor" email="IRomano@schools.nyc.gov" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Staff Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Support Staff</h2>
        <Separator className="mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <StaffMember name="Allocca, Wendi" title="School Secretary" />
              <StaffMember name="Ariza, Jose" title="Community Associate" />
              <StaffMember name="Brown, Deneni" title="Educational Paraprofessional" />
              <StaffMember name="Caines, Randee" title="Educational Paraprofessional" />
              <StaffMember name="Calderon, Kelly" title="School Secretary" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <StaffMember name="Castro, Darcy" title="Educational Paraprofessional" />
              <StaffMember name="Evereklian, Vilma" title="Secretary" />
              <StaffMember name="Figueroa, Luis" title="Educational Paraprofessional" />
              <StaffMember name="Gallego, Brandon" title="School Aide" />
              <StaffMember name="Gutierrez, Fanny" title="School Aide" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <StaffMember name="Patrick, Walter" title="School Aide" />
              <StaffMember name="Pereyra, Erasmo" title="Educational Paraprofessional" />
              <StaffMember name="Thevenot, Louis" title="Educational Paraprofessional" />
              <StaffMember name="Toro, Angelo" title="Educational Paraprofessional" />
              <StaffMember name="Townsend, Natalee" title="School Nurse/RN" />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

function StaffMember({ name, title, email }: { name: string; title: string; email?: string }) {
  if (!email) {
    return (
      <div className="py-2">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    )
  }

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="py-2 cursor-pointer">
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">{title}</p>
            <div className="flex items-center pt-2">
              <Mail className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-sm text-muted-foreground">{email}</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
} 