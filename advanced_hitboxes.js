(function(Scratch) {
  'use strict';
  
    
  const IconURI = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iLTEyNSAtMTI1IDI1MCAyNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBvbHlnb24gcG9pbnRzPSIKICAgIC0yNSwxNTAKICAgIDE1MCwtMjcuOAogICAgMTUwLCAxNTAiCiAgICBmaWxsPSJMaWdodFN0ZWVsQmx1ZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSI3Ii8+CiAgPGNpcmNsZSBjeD0iMCIgY3k9Ii05MCIgcj0iMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMTYiIC8+CiAgPGNpcmNsZSBjeD0iODUuNCIgY3k9Ii0yNy44IiByPSIxNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxNiIgLz4KICA8Y2lyY2xlIGN4PSItODUuNCIgY3k9Ii0yNy44IiByPSIxNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxNiIgLz4KICA8Y2lyY2xlIGN4PSI1Mi42IiBjeT0iNzMuNSIgcj0iMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMTYiIC8+CiAgPGNpcmNsZSBjeD0iLTUyLjYiIGN5PSI3My41IiByPSIxNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxNiIgLz4KICA8cG9seWdvbiBwb2ludHM9IgogICAgMCwtOTAKICAgIDg1LjQsLTI3LjgKICAgIDUyLjYsNzMuNQogICAgLTUyLjYsNzMuNQogICAgLTg1LjQsLTI3LjgiCiAgICBmaWxsPSJjb3JuZmxvd2VyYmx1ZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSI3Ii8+CiAgPGNpcmNsZSBjeD0iMCIgY3k9Ii05MCIgcj0iMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibGlnaHRncmV5IiBzdHJva2Utd2lkdGg9IjciIC8+CiAgPGNpcmNsZSBjeD0iODUuNCIgY3k9Ii0yNy44IiByPSIxNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJsaWdodGdyZXkiIHN0cm9rZS13aWR0aD0iNyIgLz4KICA8Y2lyY2xlIGN4PSItODUuNCIgY3k9Ii0yNy44IiByPSIxNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJsaWdodGdyZXkiIHN0cm9rZS13aWR0aD0iNyIgLz4KICA8Y2lyY2xlIGN4PSI1Mi42IiBjeT0iNzMuNSIgcj0iMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmVkIiBzdHJva2Utd2lkdGg9IjciIC8+CiAgPGNpcmNsZSBjeD0iLTUyLjYiIGN5PSI3My41IiByPSIxNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJsaWdodGdyZXkiIHN0cm9rZS13aWR0aD0iNyIgLz4KPC9zdmc+";


  // Define the extension metadata
  class collisions {
    constructor() {
      this.v = "test";
    }
    
    getInfo() {
      return {
        id: 'AlexCollisions', // Unique identifier for your extension
        name: 'Advanced Collisions',
        color1: '#3399FF',
        color2: '#336699',
        color3: '#334455',
        menuIconURI: IconURI,
        blocks: [
          {
            opcode: 'pointInPoly',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is point [POINT] inside shape [VERTICES]?',
            arguments: {
              POINT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"x":0,"y":0}'
              },
              VERTICES: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[{"x":0,"y":0},{"x":5,"y":5},{"x":5,"y":0}]'
              }
            }
          },
          {
            opcode: 'polysTouchingBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'are shapes [POLY1] and [POLY2] touching?',
            arguments: {
              POLY1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[{"x":0,"y":0},{"x":5,"y":5},{"x":5,"y":0}]'
              },
              POLY2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[{"x":3,"y":3},{"x":7,"y":7},{"x":7,"y":3}]'
              }
            }
          },
          {
            opcode: 'polysTouching',
            blockType: Scratch.BlockType.REPORTER,
            text: 'touching points of shape [POLY1] and shape [POLY2]',
            arguments: {
              POLY1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[{"x":0,"y":0},{"x":5,"y":5},{"x":5,"y":0}]'
              },
              POLY2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[{"x":3,"y":3},{"x":7,"y":7},{"x":7,"y":3}]'
              }
            }
          },
          
          "---",
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Shapes',
          },
          {
            opcode: 'createRect',
            blockType: Scratch.BlockType.REPORTER,
            text: 'rectangle with width: [WIDTH] and height: [HEIGHT]',
            arguments: {
              WIDTH: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 30
              },
              HEIGHT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 30 // Default radius
              }
            }
          },
          {
            opcode: 'createPolygon',
            blockType: Scratch.BlockType.REPORTER,
            text: 'polygon with sides [SIDES] and size [SIZE]',
            arguments: {
              SIDES: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 4
              },
              SIZE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 50 // Default radius
              }
            }
          },
          {
            opcode: 'createStar',
            blockType: Scratch.BlockType.REPORTER,
            text: 'star with [SPIKES] spikes, outer radius [OUTER_RADIUS] and inner radius [INNER_RADIUS]',
            arguments: {
              SPIKES: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 5
              },
              OUTER_RADIUS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 50
              },
              INNER_RADIUS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 25
              }
            }
          },
          {
            opcode: 'merge',
            blockType: Scratch.BlockType.REPORTER,
            text: 'merge shape [SHAPE1] and shape [SHAPE2]',
            arguments: {
              SHAPE1: {
                type: Scratch.ArgumentType.STRING,
              },
              SHAPE2: {
                type: Scratch.ArgumentType.STRING,
              }
            }
          },
          {
            opcode: 'transformPolygon',
            blockType: Scratch.BlockType.REPORTER,
            text: '[MODE] shape [VERTICES] by x: [X] y: [Y]',
            arguments: {
              MODE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "move",
                menu: "transformMenu"
              },
              VERTICES: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[{"x":0,"y":0},{"x":5,"y":0},{"x":5,"y":5}]'
              },
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 5
              }
            }
          },
          {
            opcode: 'rotateShape',
            blockType: Scratch.BlockType.REPORTER,
            text: 'rotate shape [SHAPE] by [ANGLE] degrees',
            arguments: {
              SHAPE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[{"x":0,"y":0},{"x":5,"y":0},{"x":5,"y":5}]'
              },
              ANGLE: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: 15
              }
            }
          },
          "---",
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'JSON Blocks',
          },
          {
            opcode: 'getJsonProperty',
            blockType: Scratch.BlockType.REPORTER,
            text: 'property [PROPERTY] of JSON [JSON]',
            arguments: {
              PROPERTY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'x'
              },
              JSON: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"x":5,"y":1}'
              }
            }
          },
          {
            opcode: 'getJsonArrayItem',
            blockType: Scratch.BlockType.REPORTER,
            text: 'item [INDEX] of Array [ARRAY]',
            arguments: {
              INDEX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              },
              ARRAY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[4,8,6,7]'
              }
            }
          }
        ],
        menus: {
          transformMenu: [
            "move",
            "scale"
          ]
        }
      };
    }

    pointInPoly(args) {
      const vertices = JSON.parse(args.VERTICES);
      const { x, y } = JSON.parse(args.POINT);
      let isInside = false;

      for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
        const xi = vertices[i].x, yi = vertices[i].y;
        const xj = vertices[j].x, yj = vertices[j].y;

        const intersect = ((yi > y) !== (yj > y)) &&
                          (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) isInside = !isInside;
      }

      return isInside;
    }

    polysTouching(args) {
      const verticesA = JSON.parse(args.POLY1);
      const verticesB = JSON.parse(args.POLY2);
      let touchingPoints = [];

      // Check if any vertex of polygon A is inside polygon B
      for (const vertex of verticesA) {
        if (this.pointInPoly({ POINT: JSON.stringify(vertex), VERTICES: args.POLY2 })) {
          touchingPoints.push(vertex);
        }
      }

      // Check if any vertex of polygon B is inside polygon A
      for (const vertex of verticesB) {
        if (this.pointInPoly({ POINT: JSON.stringify(vertex), VERTICES: args.POLY1 })) {
          touchingPoints.push(vertex);
        }
      }

      // If no touching points were found, check for segment intersections
      if (touchingPoints.length == 0) {
        for (let i = 0; i < verticesA.length; i++) {
          const segmentA = {
            p1: verticesA[i],
            p2: verticesA[(i + 1) % verticesA.length]
          };

          for (let j = 0; j < verticesB.length; j++) {
            const segmentB = {
              p1: verticesB[j],
              p2: verticesB[(j + 1) % verticesB.length]
            };

            if (this.segmentsIntersect(segmentA.p1, segmentA.p2, segmentB.p1, segmentB.p2)) {
              return JSON.stringify([{ x: "", y: "" }]);
            }
          }
        }
      }

      return JSON.stringify(touchingPoints);
    }

    // Helper function to check if two line segments intersect
    segmentsIntersect(p1, p2, q1, q2) {
      const o1 = this.orientation(p1, p2, q1);
      const o2 = this.orientation(p1, p2, q2);
      const o3 = this.orientation(q1, q2, p1);
      const o4 = this.orientation(q1, q2, p2);

      // General case
      if (o1 !== o2 && o3 !== o4) {
        return true;
      }

      // Special cases
      if (o1 == 0 && this.onSegment(p1, q1, p2)) return true;
      if (o2 == 0 && this.onSegment(p1, q2, p2)) return true;
      if (o3 == 0 && this.onSegment(q1, p1, q2)) return true;
      if (o4 == 0 && this.onSegment(q1, p2, q2)) return true;

      return false;
    }

    // Helper function to calculate the orientation of an ordered triplet (p, q, r)
    orientation(p, q, r) {
      const val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
      if (val === 0) return 0; // Collinear
      return (val > 0) ? 1 : 2;
    }

    // Helper function to check if point q lies on segment pr
    onSegment(p, q, r) {
      return (Math.min(p.x, r.x) <= q.x && q.x <= Math.max(p.x, r.x)) && (Math.min(p.y, r.y) <= q.y && q.y <= Math.max(p.y, r.y));
    }

    polysTouchingBoolean(args) {
      const touchingPoints = this.polysTouching(args);
      return JSON.parse(touchingPoints).length > 0;
    }

    getJsonProperty(args) {
      const jsonObject = JSON.parse(args.JSON);
      const property = args.PROPERTY;
      if((typeof jsonObject[property]) == "object" || (typeof jsonObject[property]) == "array"){
        return JSON.stringify(jsonObject[property]);
      }
      return jsonObject[property] !== undefined ? jsonObject[property] : '';
    }

    getJsonArrayItem(args) {
      const jsonArray = JSON.parse(args.ARRAY);
      const index = args.INDEX - 1;
      if((typeof jsonArray[index]) == "object" || (typeof jsonArray[index]) == "array"){
        return JSON.stringify(jsonArray[index]);
      }
      return jsonArray[index] !== undefined ? jsonArray[index] : '';
    }
    
    createPolygon(args) {
      const sides = Math.max(3, Math.floor(args.SIDES)); // Ensure at least a triangle
      const radius = args.SIZE; // Directly assign the size as the radius
  
      const vertices = [];
      for (let i = 0; i < sides; i++) {
        const angle = (2 * Math.PI / sides) * i; // Calculate angle in radians
        const x = radius * Math.cos(angle); // X coordinate
        const y = radius * Math.sin(angle); // Y coordinate
        vertices.push({ x: x, y: y }); // Push vertex to the array
      }

      return JSON.stringify(vertices); // Return the vertices as a JSON string
    }
    
    transformPolygon(args) {
      let result = [];
      if(args.MODE == "move"){
        JSON.parse(args.VERTICES).forEach((vertex, i)=>{
          result.push({x:vertex.x+args.X,y:vertex.y+args.Y});
        });
        return JSON.stringify(result);
      }
      if(args.MODE == "scale"){
        JSON.parse(args.VERTICES).forEach((vertex, i)=>{
          result.push({x:vertex.x*args.X,y:vertex.y*args.Y});
        });
        return JSON.stringify(result);
      }
      return "";
    }
    
    calculateCentroid(vertices) {
      let xSum = 0, ySum = 0;
      for (const vertex of vertices) {
        xSum += vertex.x;
        ySum += vertex.y;
      }
      return {
        x: xSum / vertices.length,
        y: ySum / vertices.length
      };
    }
    
    // Uses calculateCentroid to return the centroid for the reporter
    centroid(args) {
      return JSON.stringify(this.calculateCentroid(JSON.parse(args.SHAPE)));
    }

    // Function to rotate a polygon around its centroid
    rotateShape(args) {
      const vertices = JSON.parse(args.SHAPE); // Parse input shape as JSON array of vertices
      const angleDegrees = args.ANGLE;
      const angleRadians = (Math.PI / 180) * -angleDegrees; // Convert degrees to radians

      // Calculate the centroid of the polygon
      const centroid = this.calculateCentroid(vertices);

      // Rotate each vertex around the centroid
      const rotatedVertices = vertices.map(vertex => {
        const dx = vertex.x - centroid.x;
        const dy = vertex.y - centroid.y;

        // Apply rotation transformation
        const rotatedX = dx * Math.cos(angleRadians) - dy * Math.sin(angleRadians) + centroid.x;
        const rotatedY = dx * Math.sin(angleRadians) + dy * Math.cos(angleRadians) + centroid.y;

        return { x: rotatedX, y: rotatedY };
      });

      return JSON.stringify(rotatedVertices);
    }
    
    createStar(args) {
      const spikes = Math.max(2, Math.floor(args.SPIKES)); // Ensure at least 2 spikes
      const outerRadius = args.OUTER_RADIUS;
      const innerRadius = args.INNER_RADIUS;

      const vertices = [];
      const totalPoints = spikes * 2; // Each spike has an inner and outer point

      for (let i = 0; i < totalPoints; i++) {
        const radius = (i % 2 === 0) ? outerRadius : innerRadius; // Alternate radii for outer and inner points
        const angle = (2 * Math.PI / totalPoints) * i; // Calculate angle for each point in radians
        const x = radius * Math.cos(angle); // X coordinate
        const y = radius * Math.sin(angle); // Y coordinate
        vertices.push({ x: x, y: y }); // Push vertex to the array
      }

      return JSON.stringify(vertices); // Return the vertices as a JSON string
    }
    
    createRect(args) {
      let min = {x: args.WIDTH/2, y: args.HEIGHT/2};
      let max = min;
      min = {x: -min.x, y: -min.y};
      
      let vertices = [
        { x: min.x, y: min.y }, // Bottom-left corner
        { x: max.x, y: min.y }, // Bottom-right corner
        { x: max.x, y: max.y }, // Top-right corner
        { x: min.x, y: max.y }  // Top-left corner
      ];
      
      return JSON.stringify(vertices);
    }
    
    // Merge shapes
    merge(args){
      const shape1 = JSON.parse(args.SHAPE1);
      const shape2 = JSON.parse(args.SHAPE2);
      
      // Calculate intersections
      let intersections = [];

      for (let i = 0; i < shape1.length; i++) {
        const p1 = shape1[i];
        const p2 = shape1[(i + 1) % shape1.length];

        for (let j = 0; j < shape2.length; j++) {
          const q1 = shape2[j];
          const q2 = shape2[(j + 1) % shape2.length];

          const intersection = this.findSegmentIntersection(p1, p2, q1, q2);
          if (intersection) intersections.push(intersection);
        }
      }
      
      // Calculate outer vertices
      const outerVertices = [];
      
      for (let i = 0; i < shape1.length; i++){
        if(!this.pointInPoly({POINT: JSON.stringify(shape1[i]), VERTICES: JSON.stringify(shape2)})){
          outerVertices.push(shape1[i]);
        }
      }
      for (let i = 0; i < shape2.length; i++){
        if(!this.pointInPoly({POINT: JSON.stringify(shape2[i]), VERTICES: JSON.stringify(shape1)})){
          outerVertices.push(shape2[i]);
        }
      }
      
      // Merge desired vertices
      let jumbled_shape = intersections.concat(outerVertices);
      
      // Calculate centroid
      let centroid = this.calculateCentroid(jumbled_shape);
      
      // Sort vertices based off their angle
      let shape = jumbled_shape.slice().sort((a, b) => {
            const angleA = Math.atan2(a.y - centroid.y, a.x - centroid.x);
            const angleB = Math.atan2(b.y - centroid.y, b.x - centroid.x);
            return angleA - angleB;
        });
      
      return JSON.stringify(shape);
    }
    
    // Helper function to find intersects
    findSegmentIntersection(p1, p2, q1, q2) {
      // Calculate the direction vectors
      const dx1 = p2.x - p1.x;
      const dy1 = p2.y - p1.y;
      const dx2 = q2.x - q1.x;
      const dy2 = q2.y - q1.y;

      // Calculate the determinant
      const determinant = dx1 * dy2 - dy1 * dx2;

      // If the determinant is zero, the segments are parallel or collinear
      if (determinant == 0) return false;

      // Calculate the parameters (t, u) for the line equations
      const t = ((q1.x - p1.x) * dy2 - (q1.y - p1.y) * dx2) / determinant;
      const u = ((q1.x - p1.x) * dy1 - (q1.y - p1.y) * dx1) / determinant;

      // Calculate the intersection point using the parameter t
      const x = p1.x + t * dx1;
      const y = p1.y + t * dy1;

      // Create the intersection point
      const intersection = { x: x, y: y };
      
      console.log("this.onSegment("+JSON.stringify(p1)+","+ JSON.stringify(intersection)+","+ JSON.stringify(p2)+"):"+this.onSegment(p1, intersection, p2));
      console.log("this.onSegment("+JSON.stringify(q1)+","+ JSON.stringify(intersection)+","+ JSON.stringify(q2) +"):"+this.onSegment(q1, intersection, q2));

      // Check if the intersection point lies within both segments
      if (this.onSegment(p1, intersection, p2) && this.onSegment(q1, intersection, q2)) {
        return intersection; // Intersection found
      }
      
      console.log(intersection);
  
      return false; // Intersection does not lie within the bounds of both segments
    }
  }

  Scratch.extensions.register(new collisions());
  var test = new collisions();
})(Scratch);




























