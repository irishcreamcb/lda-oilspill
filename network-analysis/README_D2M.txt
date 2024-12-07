

The result of the data to model wizard is a final thesauri, along 
with the generation of concept lists and networks.

=== Meta-Networks ===
*** union_semantic_network.xml ***
A meta-network in which every node is classified as "Knowledge" in
ORA's network ontology. In this network every node is an abstract
representation of an idea. The nodes "Barack Obama", "The Tea
Party", and "Democracy" may all be linked together in this
network because they are considered abstractions, not concrete
instances of a person, an organization, and a philosophy. AutoMap
refers to this kind of generic knowledge as a "Concept", and so this
name is used for this particular collection of knowledge nodes.

This meta-network is a "union" because it combines all of the
relations seen in each individual text into a single network.
Consequently, it also includes a set of Knowledge nodes representing
the individual texts that are combined in the union. Each text is
linked to each word that appeared in the text in the "Concept x Text"
network.


*** union_meta_network.xml ***
A meta-network in which nodes have been classified into a variety
of different categories according to ORA's network ontology.
Every link present in union_semantic_network exists here, but has
been subdivided into an appropriate network. The "Barack Obama"
node will be linked to "The Tea Party" node in anAgent x Organization
network, "The Tea Party" and "Democracy" will be linked in an
Organization x Knowledge network, and "Barack Obama" and
"Democracy" will be linked in an Agent x Knowledge network.


=== Incorporated Thesauri ===
*** generatedThesauri.csv ***
This thesaurus is automatically generated from your text data, and
is provided here for your reference. After creating
generatedThesauri,the D2M process merges it first with any
standard thesaurus and then any change thesaurus that you may have
provided to create finalThesauri.

*** finalThesauri.csv ***
The final thesaurus created by the data to model wizard, and it
combines generatedThesauri with any standard thesaurus and change
thesaurus that you may have provided. This thesaurus is then
applied to the texts, which are converted to the union semantic
and meta networks


=== Suggested Thesauri ===
Contained in the "Suggestions" folder, these are additional
thesauri that you may want to incorporate into any future
thesaurus you create. These files are not automatically
incorporated into generatedThesauri because they require
significant manual review. They include:

*** SuggestedNGramThesuauri.csv ***
This thesaurus contains all of the phrases in the text that
AutoMap has identified syntactically as possibly being
N-grams. (All entries should be sequences of adjectives
and nouns or noun phrases.)

*** possibleAcronymThesauri.csv ***
This thesaurus contains all of words in the text that
AutoMap has identified as possibly being acronyms. These
should all be terms mentioned in the file in ALL CAPS.


=== Other Material ===
*** fullunion.csv ***
This is a union concept list, created after the generation and
application finalThesauri to each text. It contains frequency
counts and other data that can be useful in determining what
other words or concepts you might want to remove or transform.

*** reviewlist.csv ***
This is a concept list in a change format.  You can manually
identify how  the concepts are to be otherwise changed or
categorized.  You should convert it into a master thesauri format
before using it as your change thesauri in subsequent D2M runs.
